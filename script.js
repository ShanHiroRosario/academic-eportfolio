// Main JavaScript file for portfolio functionality

// ===================================
// File Upload API Configuration
// ===================================

const API_BASE_URL = 'http://localhost:3000';

// Check if server is running
async function checkServerRunning() {
    // Only check if on localhost (not on GitHub Pages)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return false; // Don't check on GitHub Pages
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/upload`, { 
            method: 'OPTIONS',
            signal: AbortSignal.timeout(1000) // 1 second timeout
        });
        return response.ok;
    } catch (error) {
        return false;
    }
}

// Upload file to server
async function uploadFile(file, type, additionalData = {}) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    
    // Add additional data
    Object.keys(additionalData).forEach(key => {
        formData.append(key, additionalData[key]);
    });
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/upload`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Upload failed');
        }
        
        const result = await response.json();
        return result.path; // Returns relative path like /assets/profile/...
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
}

// Delete file from server
async function deleteFile(filePath) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/upload`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ path: filePath })
        });
        
        return response.ok;
    } catch (error) {
        console.error('Delete error:', error);
        return false;
    }
}

// ===================================
// Navigation
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Check if server is running
    checkServerRunning().then(isRunning => {
        if (!isRunning && window.location.hostname === 'localhost') {
            console.warn('⚠️ Development server is not running. File uploads will not work.');
            console.warn('Run "npm run dev" to start the server.');
        }
    });

    // Try to load data from portfolio-data.json file (works on both localhost and GitHub Pages)
    PortfolioData.loadFromJsonFile().then(jsonData => {
        if (jsonData) {
            // Data loaded from JSON file - refresh the page
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                initializeHomePage();
            }
            // Also try loading sections if on section pages
            const urlPath = window.location.pathname;
            if (urlPath.includes('prelims.html')) {
                loadSectionActivities('prelims');
                loadLearningReflection('prelims');
            } else if (urlPath.includes('midterms.html')) {
                loadSectionActivities('midterms');
                loadLearningReflection('midterms');
            } else if (urlPath.includes('finals.html')) {
                loadSectionActivities('finals');
                loadLearningReflection('finals');
            }
        }
    });

    // Initialize page based on current page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        initializeHomePage();
    }
});

// ===================================
// Home Page Functions
// ===================================

function initializeHomePage() {
    loadAboutMe();
    loadDocuments();
    loadCertificates();
    processDocumentLinks();
}

function loadAboutMe() {
    const aboutMe = PortfolioData.getAboutMe();
    const profileImage = PortfolioData.getProfileImage();
    
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const aboutMeContent = document.getElementById('aboutMe');
    const profileImg = document.getElementById('profileImage');
    
    if (heroTitle) heroTitle.textContent = aboutMe.title;
    if (heroSubtitle) heroSubtitle.textContent = aboutMe.subtitle;
    if (aboutMeContent) aboutMeContent.textContent = aboutMe.content;
    if (profileImg) profileImg.src = profileImage;
    
    // Auto-save on blur for editable content
    if (heroTitle) {
        heroTitle.addEventListener('blur', function() {
            PortfolioData.updateAboutMe({ title: this.textContent });
        });
    }
    
    if (heroSubtitle) {
        heroSubtitle.addEventListener('blur', function() {
            PortfolioData.updateAboutMe({ subtitle: this.textContent });
        });
    }
    
    if (aboutMeContent) {
        aboutMeContent.addEventListener('blur', function() {
            // Save as plain text (without HTML)
            PortfolioData.updateAboutMe({ content: this.textContent || this.innerText });
            // Reprocess document links after content update
            setTimeout(processDocumentLinks, 100);
        });
        
        // Process document links on initial load
        processDocumentLinks();
    }
}

function loadDocuments() {
    const documents = PortfolioData.getDocuments();
    const container = document.getElementById('documentsContainer');
    
    if (!container) return;
    
    if (documents.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-file-pdf"></i>
                <p>No documents added yet. Click "Add Document" to upload a PDF.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = documents.map(doc => `
        <div class="document-item">
            <div class="document-info">
                <i class="fas fa-file-pdf" style="color: #ef4444; font-size: 1.5rem; margin-right: 1rem;"></i>
                <div>
                    <h4 class="document-name">${escapeHtml(doc.name)}</h4>
                    <p class="document-link-hint">Use: <code>&lt;doc:${escapeHtml(doc.name)}&gt;</code> in your About Me section</p>
                </div>
            </div>
            <button class="delete-btn" onclick="deleteDocument('${doc.id}')" title="Delete Document">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

async function addDocument() {
    // Create a modal form for document input
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content-wrapper" style="max-width: 500px;">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 style="margin-bottom: 1.5rem;">Add Document</h2>
            <form id="documentForm" onsubmit="handleDocumentSubmit(event)">
                <div class="form-group">
                    <label for="docName">Document Name *</label>
                    <input type="text" id="docName" placeholder="e.g., Expectations for ITCC508" required>
                    <small style="color: var(--text-light); display: block; margin-top: 0.5rem;">
                        This name will be used to link the document: &lt;doc:name&gt;
                    </small>
                </div>
                <div class="form-group">
                    <label for="docFile">PDF Document *</label>
                    <input type="file" id="docFile" accept=".pdf,application/pdf" required>
                    <small style="color: var(--text-light); display: block; margin-top: 0.5rem;">
                        Select a PDF file from your computer
                    </small>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Document</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

async function handleDocumentSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('docName').value.trim();
    const fileInput = document.getElementById('docFile');
    
    if (!name || !fileInput.files[0]) {
        alert('Please provide a document name and select a PDF file.');
        return;
    }
    
    if (!fileInput.files[0].type.includes('pdf')) {
        alert('Please select a valid PDF file.');
        return;
    }
    
    const file = fileInput.files[0];
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Uploading...';
    
    try {
        // Upload file to server
        const filePath = await uploadFile(file, 'document');
        
        const docData = {
            name: name,
            path: filePath, // Store file path instead of data URL
            filename: file.name
        };
        
        PortfolioData.addDocument(docData);
        loadDocuments();
        processDocumentLinks();
        
        // Close modal
        event.target.closest('.modal').remove();
    } catch (error) {
        alert('Failed to upload document. Make sure the development server is running (npm run dev).');
        console.error('Upload error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

async function deleteDocument(id) {
    if (confirm('Are you sure you want to delete this document? Any links to it in your About Me section will stop working.')) {
        const documents = PortfolioData.getDocuments();
        const doc = documents.find(d => d.id === id);
        
        // Delete file from server if it's a file path
        if (doc && doc.path && doc.path.startsWith('/assets/')) {
            try {
                await deleteFile(doc.path);
            } catch (error) {
                console.error('Failed to delete file:', error);
            }
        }
        
        PortfolioData.deleteDocument(id);
        loadDocuments();
        processDocumentLinks();
    }
}

function processDocumentLinks() {
    const aboutMeContent = document.getElementById('aboutMe');
    if (!aboutMeContent) return;
    
    // Don't process while user is editing
    if (aboutMeContent.matches(':focus') || aboutMeContent.getAttribute('contenteditable') === 'true') {
        return;
    }
    
    // Get text content (plain text) to find document references
    const textContent = aboutMeContent.textContent || aboutMeContent.innerText;
    
    // Find all <doc:name> patterns in plain text
    const docPattern = /<doc:([^>]+)>/gi;
    const matches = [...textContent.matchAll(docPattern)];
    
    if (matches.length === 0) {
        return; // No document references found
    }
    
    const documents = PortfolioData.getDocuments();
    let htmlContent = textContent;
    
    // Replace each match with clickable link
    matches.reverse().forEach(match => {
        const fullMatch = match[0];
        const docName = match[1].trim();
        const doc = documents.find(d => d.name.toLowerCase() === docName.toLowerCase());
        
        let replacement;
        if (doc) {
            replacement = `<a href="#" class="document-link" onclick="openPdf('${doc.id}'); return false;" title="Preview ${escapeHtml(doc.name)}">${escapeHtml(docName)}</a>`;
        } else {
            replacement = `<span class="document-link-broken" title="Document '${escapeHtml(docName)}' not found. Please upload it first.">${escapeHtml(docName)}</span>`;
        }
        
        // Replace in HTML (preserving line breaks)
        htmlContent = htmlContent.replace(fullMatch, replacement);
    });
    
    // Convert line breaks to <br> tags
    htmlContent = htmlContent.replace(/\n/g, '<br>');
    
    // Update content if it changed
    if (aboutMeContent.innerHTML !== htmlContent) {
        aboutMeContent.innerHTML = htmlContent;
    }
}

function openPdf(documentId) {
    const pdfDoc = PortfolioData.getDocument(documentId);
    if (!pdfDoc) {
        alert('Document not found.');
        return;
    }
    
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    
    if (modal && viewer) {
        // Use the file path (works on both localhost and GitHub Pages)
        viewer.src = pdfDoc.path;
        modal.style.display = 'block';
    }
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    
    if (modal) {
        modal.style.display = 'none';
        // Clear the iframe src to free memory
        if (viewer) {
            setTimeout(() => {
                viewer.src = '';
            }, 300);
        }
    }
}

function loadCertificates() {
    const certificates = PortfolioData.getCertificates();
    const container = document.getElementById('certificatesContainer');
    
    if (!container) return;
    
    if (certificates.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-certificate"></i>
                <p>No certificates added yet. Click "Add Certificate" to add one.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = certificates.map(cert => `
        <div class="certificate-card">
            <button class="delete-btn" onclick="event.stopPropagation(); deleteCertificate('${cert.id}')" title="Delete Certificate">
                <i class="fas fa-times"></i>
            </button>
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image" onclick="viewImage('${cert.image}')">
            <h3 class="certificate-title">${escapeHtml(cert.title)}</h3>
            <p class="certificate-date"><i class="fas fa-calendar"></i> ${cert.date}</p>
            ${cert.issuer ? `<p class="certificate-date"><i class="fas fa-building"></i> ${escapeHtml(cert.issuer)}</p>` : ''}
        </div>
    `).join('');
}

function addCertificate() {
    // Create a modal form for certificate input
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content-wrapper" style="max-width: 500px;">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 style="margin-bottom: 1.5rem;">Add Certificate</h2>
            <form id="certificateForm" onsubmit="handleCertificateSubmit(event)">
                <div class="form-group">
                    <label for="certTitle">Certificate Title *</label>
                    <input type="text" id="certTitle" required>
                </div>
                <div class="form-group">
                    <label for="certDate">Date (e.g., January 2024)</label>
                    <input type="text" id="certDate">
                </div>
                <div class="form-group">
                    <label for="certIssuer">Issuing Organization</label>
                    <input type="text" id="certIssuer">
                </div>
                <div class="form-group">
                    <label for="certImage">Certificate Image *</label>
                    <input type="file" id="certImage" accept="image/*" required>
                    <small style="color: var(--text-light); display: block; margin-top: 0.5rem;">
                        Select an image file from your computer
                    </small>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Certificate</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

async function handleCertificateSubmit(event) {
    event.preventDefault();
    
    const title = document.getElementById('certTitle').value;
    const date = document.getElementById('certDate').value;
    const issuer = document.getElementById('certIssuer').value;
    const imageInput = document.getElementById('certImage');
    
    if (!title || !imageInput.files[0]) {
        alert('Please provide a title and select an image.');
        return;
    }
    
    const file = imageInput.files[0];
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Uploading...';
    
    try {
        // Upload file to server
        const imagePath = await uploadFile(file, 'certificate');
        
        const certificate = {
            title: title,
            date: date,
            issuer: issuer,
            image: imagePath // Store file path instead of data URL
        };
        
        PortfolioData.addCertificate(certificate);
        loadCertificates();
        
        // Close modal
        event.target.closest('.modal').remove();
    } catch (error) {
        alert('Failed to upload certificate image. Make sure the development server is running (npm run dev).');
        console.error('Upload error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

async function deleteCertificate(id) {
    if (confirm('Are you sure you want to delete this certificate?')) {
        const certificates = PortfolioData.getCertificates();
        const cert = certificates.find(c => c.id === id);
        
        // Delete file from server if it's a file path
        if (cert && cert.image && cert.image.startsWith('/assets/')) {
            try {
                await deleteFile(cert.image);
            } catch (error) {
                console.error('Failed to delete file:', error);
            }
        }
        
        PortfolioData.deleteCertificate(id);
        loadCertificates();
    }
}

function editImage(elementId) {
    const input = document.getElementById('imageInput');
    if (!input) {
        // Create file input if it doesn't exist
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';
        fileInput.onchange = function(e) {
            handleProfileImageUpload(e);
        };
        document.body.appendChild(fileInput);
        fileInput.click();
    } else {
        input.onchange = function(e) {
            handleProfileImageUpload(e);
        };
        input.click();
    }
}

async function handleProfileImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    try {
        // Upload file to server
        const imagePath = await uploadFile(file, 'profile');
        
        // Update profile image with file path
        PortfolioData.updateProfileImage(imagePath);
        const profileImg = document.getElementById('profileImage');
        if (profileImg) profileImg.src = imagePath;
    } catch (error) {
        alert('Failed to upload profile image. Make sure the development server is running (npm run dev).');
        console.error('Upload error:', error);
    }
}

// ===================================
// Section Pages Functions
// ===================================

function loadSectionActivities(section) {
    const activities = PortfolioData.getSectionActivities(section);
    const container = document.getElementById('activitiesContainer');
    
    if (!container) return;
    
    if (activities.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tasks"></i>
                <p>No activities added yet. Click "Add Activity" to add one.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = activities.map(activity => {
        // Get first image URL (handle both old string format and new object format)
        let firstImageUrl = null;
        if (activity.images && activity.images.length > 0) {
            const firstImage = activity.images[0];
            firstImageUrl = PortfolioData.getImageUrl(firstImage);
        }
        
        return `
        <div class="activity-card" onclick="navigateToActivity('${section}', '${activity.id}')">
            <button class="delete-btn" onclick="event.stopPropagation(); deleteActivity('${section}', '${activity.id}')" title="Delete Activity">
                <i class="fas fa-times"></i>
            </button>
            ${firstImageUrl ? 
                `<img src="${firstImageUrl}" alt="${activity.title}" class="activity-thumbnail">` :
                `<div class="activity-thumbnail" style="display: flex; align-items: center; justify-content: center; background: var(--bg-light);">
                    <i class="fas fa-image" style="font-size: 3rem; color: var(--text-light); opacity: 0.5;"></i>
                </div>`
            }
            <h3 class="activity-title">${escapeHtml(activity.title)}</h3>
            <p class="activity-description">${escapeHtml(activity.description || '')}</p>
            <p class="activity-date">
                <i class="fas fa-calendar"></i> ${activity.date || 'No date'}
            </p>
        </div>
    `;
    }).join('');
}

function navigateToActivity(section, activityId) {
    window.location.href = `activity.html?section=${section}&id=${activityId}`;
}

function loadLearningReflection(section) {
    const reflection = PortfolioData.getLearningReflection(section);
    const container = document.getElementById('learningReflection');
    
    if (container) {
        container.textContent = reflection;
        container.addEventListener('blur', function() {
            PortfolioData.updateLearningReflection(section, this.textContent);
        });
    }
}

function addActivity(section) {
    // Create a modal form for activity input
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content-wrapper" style="max-width: 500px;">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 style="margin-bottom: 1.5rem;">Add Activity</h2>
            <form id="activityForm" onsubmit="handleActivitySubmit(event, '${section}')">
                <div class="form-group">
                    <label for="activityTitle">Activity Title *</label>
                    <input type="text" id="activityTitle" required>
                </div>
                <div class="form-group">
                    <label for="activityDescription">Description</label>
                    <textarea id="activityDescription" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="activityDate">Date (e.g., January 15, 2024)</label>
                    <input type="text" id="activityDate" value="${new Date().toLocaleDateString()}">
                </div>
                <div class="form-group">
                    <label for="activityThumbnail">Preview Image (Optional)</label>
                    <input type="file" id="activityThumbnail" accept="image/*">
                    <small style="color: var(--text-light); display: block; margin-top: 0.5rem;">
                        This image will appear as a preview on the ${section} page
                    </small>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Activity</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

async function handleActivitySubmit(event, section) {
    event.preventDefault();
    
    const title = document.getElementById('activityTitle').value.trim();
    const description = document.getElementById('activityDescription').value;
    const date = document.getElementById('activityDate').value;
    const thumbnailInput = document.getElementById('activityThumbnail');
    
    if (!title) {
        alert('Please provide an activity title.');
        return;
    }
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating...';
    
    try {
        let thumbnailPath = null;
        
        // Upload thumbnail if provided
        if (thumbnailInput.files[0]) {
            thumbnailPath = await uploadFile(thumbnailInput.files[0], 'activity', { section: section });
        }
        
        const activity = {
            title: title,
            description: description,
            date: date,
            images: thumbnailPath ? [{ url: thumbnailPath, description: '' }] : []
        };
        
        PortfolioData.addActivity(section, activity);
        loadSectionActivities(section);
        
        // Close modal
        event.target.closest('.modal').remove();
        
        // Optionally navigate to the new activity
        setTimeout(() => {
            const activities = PortfolioData.getSectionActivities(section);
            const newActivity = activities[activities.length - 1];
            navigateToActivity(section, newActivity.id);
        }, 100);
    } catch (error) {
        alert('Failed to create activity. Make sure the development server is running (npm run dev).');
        console.error('Error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

function deleteActivity(section, activityId) {
    if (confirm('Are you sure you want to delete this activity?')) {
        PortfolioData.deleteActivity(section, activityId);
        loadSectionActivities(section);
    }
}

// These functions are now used in activity.html
function renderActivityImages(section, activityId, images) {
    if (!images || images.length === 0) {
        return `
            <div class="empty-state">
                <i class="fas fa-images"></i>
                <p>No images added yet. Click "Add Image" to upload supporting images.</p>
            </div>
        `;
    }
    
    return images.map((img, index) => {
        const imageUrl = PortfolioData.getImageUrl(img);
        const imageDesc = PortfolioData.getImageDescription(img);
        
        // Escape URL for HTML attribute (only escape quotes)
        const escapedUrl = imageUrl.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        return `
        <div class="image-item">
            <div class="image-wrapper">
                <img src="${escapeHtml(imageUrl)}" alt="Supporting Image ${index + 1}" class="gallery-image" 
                     onclick="viewImage('${escapedUrl}')">
                <button class="delete-btn" onclick="event.stopPropagation(); deleteActivityImage('${section}', '${activityId}', ${index})" 
                        title="Delete Image">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="image-description-wrapper">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-dark);">
                    <i class="fas fa-comment-alt"></i> Image Explanation
                </label>
                <textarea class="image-description" placeholder="Explain this image (e.g., confusion matrix results showing X% accuracy, model pipeline architecture, importance of these results, etc.)" 
                          onblur="updateImageDescription('${section}', '${activityId}', ${index}, this.value)">${escapeHtml(imageDesc)}</textarea>
            </div>
        </div>
    `;
    }).join('');
}

function addActivityImage(section, activityId) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    input.onchange = function(e) {
        handleActivityImageUpload(e, section, activityId);
    };
    document.body.appendChild(input);
    input.click();
}

async function handleActivityImageUpload(event, section, activityId) {
    const file = event.target.files[0];
    if (!file) return;
    
    try {
        // Upload file to server
        const imagePath = await uploadFile(file, 'activity', { section: section });
        
        // Add image with empty description (user can fill it in)
        PortfolioData.addActivityImage(section, activityId, { url: imagePath, description: '' });
        
        // Refresh the activity view
        refreshActivityPage(section, activityId);
    } catch (error) {
        alert('Failed to upload activity image. Make sure the development server is running (npm run dev).');
        console.error('Upload error:', error);
    }
}

function updateImageDescription(section, activityId, imageIndex, description) {
    PortfolioData.updateActivityImage(section, activityId, imageIndex, { description: description });
}

function refreshActivityPage(section, activityId) {
    const activities = PortfolioData.getSectionActivities(section);
    const activity = activities.find(act => act.id === activityId);
    
    const gallery = document.getElementById('activityImagesGallery');
    if (gallery && activity) {
        gallery.innerHTML = renderActivityImages(section, activityId, activity.images || []);
    }
}

async function deleteActivityImage(section, activityId, imageIndex) {
    if (confirm('Are you sure you want to delete this image?')) {
        const activities = PortfolioData.getSectionActivities(section);
        const activity = activities.find(act => act.id === activityId);
        
        if (activity && activity.images && activity.images[imageIndex]) {
            const image = activity.images[imageIndex];
            const imageUrl = PortfolioData.getImageUrl(image);
            
            // Delete file from server if it's a file path
            if (imageUrl && imageUrl.startsWith('/assets/')) {
                try {
                    await deleteFile(imageUrl);
                } catch (error) {
                    console.error('Failed to delete file:', error);
                }
            }
        }
        
        PortfolioData.deleteActivityImage(section, activityId, imageIndex);
        refreshActivityPage(section, activityId);
    }
}

// ===================================
// Image Viewing
// ===================================

function viewImage(imageUrl) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imageUrl;
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) modal.style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const activityModal = document.getElementById('activityModal');
    const imageModal = document.getElementById('imageModal');
    const pdfModal = document.getElementById('pdfModal');
    
    if (event.target === activityModal) {
        activityModal.style.display = 'none';
    }
    
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
    
    if (event.target === pdfModal) {
        closePdfModal();
    }
}

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeActivityModal();
        closeImageModal();
        closePdfModal();
    }
});

// ===================================
// Edit Mode
// ===================================

function toggleEditMode() {
    const editableElements = document.querySelectorAll('.editable-content');
    editableElements.forEach(element => {
        const isEditable = element.getAttribute('contenteditable') === 'true';
        element.setAttribute('contenteditable', !isEditable);
    });
}

// ===================================
// Utility Functions
// ===================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

