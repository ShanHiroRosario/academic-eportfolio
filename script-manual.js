// Simplified script that reads from portfolio-content.js (manual file paths)

// ===================================
// PDF Modal Functions
// ===================================

function openPdfModal(filename) {
    // filename should be just the filename like "1exercise.pdf"
    // File should be in assets/documents/
    const filePath = `assets/documents/${filename}`;
    
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    
    if (modal && viewer) {
        viewer.src = filePath;
        modal.style.display = 'block';
    }
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    
    if (modal) {
        modal.style.display = 'none';
        if (viewer) {
            setTimeout(() => {
                viewer.src = '';
            }, 300);
        }
    }
}

// ===================================
// Image Modal Functions
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
    loadCertificates();
}

function loadAboutMe() {
    if (!PortfolioContent) return;
    
    const profileImg = document.getElementById('profileImage');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const aboutMeContent = document.getElementById('aboutMe');
    
    if (profileImg && PortfolioContent.profileImage) {
        profileImg.src = PortfolioContent.profileImage;
    }
    
    if (heroTitle && PortfolioContent.aboutMe) {
        heroTitle.textContent = PortfolioContent.aboutMe.title;
    }
    
    if (heroSubtitle && PortfolioContent.aboutMe) {
        heroSubtitle.textContent = PortfolioContent.aboutMe.subtitle;
    }
    
    if (aboutMeContent && PortfolioContent.aboutMe) {
        aboutMeContent.innerHTML = PortfolioContent.aboutMe.content;
    }
}

function loadCertificates() {
    if (!PortfolioContent || !PortfolioContent.certificates) return;
    
    const container = document.getElementById('certificatesContainer');
    if (!container) return;
    
    if (PortfolioContent.certificates.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-certificate"></i>
                <p>No certificates added yet. Edit portfolio-content.js to add certificates.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = PortfolioContent.certificates.map(cert => `
        <div class="certificate-card">
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image" onclick="viewImage('${cert.image}')">
            <h3 class="certificate-title">${escapeHtml(cert.title)}</h3>
            <p class="certificate-date"><i class="fas fa-calendar"></i> ${cert.date || ''}</p>
            ${cert.issuer ? `<p class="certificate-date"><i class="fas fa-building"></i> ${escapeHtml(cert.issuer)}</p>` : ''}
        </div>
    `).join('');
}

// ===================================
// Section Pages Functions
// ===================================

function loadSectionActivities(section) {
    if (!PortfolioContent || !PortfolioContent.activities) return;
    
    const activities = PortfolioContent.activities[section] || [];
    const container = document.getElementById('activitiesContainer');
    
    if (!container) return;
    
    if (activities.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tasks"></i>
                <p>No activities added yet. Edit portfolio-content.js to add activities.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = activities.map(activity => {
        const thumbnail = activity.thumbnail || (activity.images && activity.images.length > 0 ? activity.images[0].url : null);
        
        return `
        <div class="activity-card" onclick="navigateToActivity('${section}', '${activity.id}')">
            ${thumbnail ? 
                `<img src="${thumbnail}" alt="${activity.title}" class="activity-thumbnail">` :
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

function loadAllLearningReflections(section) {
    if (!PortfolioContent || !PortfolioContent.reflections) return;
    
    const reflections = PortfolioContent.reflections[section] || {};
    
    // Load whole period reflection
    const wholePeriodEl = document.getElementById('reflectionWholePeriod');
    if (wholePeriodEl) {
        wholePeriodEl.textContent = reflections.wholePeriod || 'No reflection added yet.';
    }
    
    // Load laboratory exercises reflection
    const laboratoryEl = document.getElementById('reflectionLaboratory');
    if (laboratoryEl) {
        laboratoryEl.textContent = reflections.laboratoryExercises || 'No reflection added yet.';
    }
    
    // Load assignments reflection
    const assignmentsEl = document.getElementById('reflectionAssignments');
    if (assignmentsEl) {
        assignmentsEl.textContent = reflections.assignments || 'No reflection added yet.';
    }
    
    // Load exams reflection
    const examsEl = document.getElementById('reflectionExams');
    if (examsEl) {
        examsEl.textContent = reflections.exams || 'No reflection added yet.';
    }
}

// Keep old function for backward compatibility
function loadLearningReflection(section) {
    loadAllLearningReflections(section);
}

// ===================================
// Activity Detail Page Functions
// ===================================

function loadActivityPage(section, activityId) {
    if (!PortfolioContent || !PortfolioContent.activities) return;
    
    const activities = PortfolioContent.activities[section] || [];
    const activity = activities.find(act => act.id === activityId);
    
    const loadingState = document.getElementById('loadingState');
    const activityContent = document.getElementById('activityContent');
    const errorState = document.getElementById('errorState');
    
    if (!activity) {
        if (loadingState) loadingState.style.display = 'none';
        if (errorState) errorState.style.display = 'block';
        return;
    }
    
    if (loadingState) loadingState.style.display = 'none';
    if (activityContent) activityContent.style.display = 'block';
    
    const sectionNames = {
        prelims: 'Prelims',
        midterms: 'Midterms',
        finals: 'Finals'
    };
    
    const sectionNameEl = document.getElementById('sectionName');
    const backLink = document.getElementById('backLink');
    const titleEl = document.getElementById('activityTitle');
    const metaEl = document.getElementById('activityMeta');
    const descEl = document.getElementById('activityDescription');
    
    if (sectionNameEl) sectionNameEl.textContent = sectionNames[section] || section;
    if (backLink) backLink.href = `${section}.html`;
    if (titleEl) titleEl.textContent = activity.title;
    if (metaEl) {
        metaEl.innerHTML = `
            <i class="fas fa-calendar"></i> ${activity.date || 'No date'} | 
            <i class="fas fa-folder"></i> ${sectionNames[section] || section}
        `;
    }
    if (descEl) descEl.textContent = activity.description || 'No description provided.';
    
    // Load images
    refreshActivityPage(section, activityId);
}

function refreshActivityPage(section, activityId) {
    if (!PortfolioContent || !PortfolioContent.activities) return;
    
    const activities = PortfolioContent.activities[section] || [];
    const activity = activities.find(act => act.id === activityId);
    const gallery = document.getElementById('activityImagesGallery');
    
    if (!gallery || !activity) return;
    
    if (!activity.images || activity.images.length === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-images"></i>
                <p>No images added yet. Edit portfolio-content.js to add images.</p>
            </div>
        `;
        return;
    }
    
    gallery.innerHTML = activity.images.map((img, index) => {
        const imageUrl = typeof img === 'string' ? img : img.url;
        const imageDesc = typeof img === 'string' ? '' : (img.description || '');
        
        return `
        <div class="image-item">
            <div class="image-wrapper">
                <img src="${imageUrl}" alt="Supporting Image ${index + 1}" class="gallery-image" 
                     onclick="viewImage('${imageUrl}')">
            </div>
            <div class="image-description-wrapper">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-dark);">
                    <i class="fas fa-comment-alt"></i> Image Explanation
                </label>
                <div class="image-description" style="padding: 1rem; background: white; border: 2px solid var(--border-color); border-radius: 0.5rem; min-height: 80px;">
                    ${escapeHtml(imageDesc)}
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// ===================================
// Utility Functions
// ===================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close modals when clicking outside
window.onclick = function(event) {
    const imageModal = document.getElementById('imageModal');
    const pdfModal = document.getElementById('pdfModal');
    
    if (event.target === imageModal) {
        closeImageModal();
    }
    
    if (event.target === pdfModal) {
        closePdfModal();
    }
}

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
        closePdfModal();
    }
});

// Placeholder functions (not used in manual mode)
function toggleEditMode() {}
function addActivity() {}
function addCertificate() {}
function addDocument() {}


