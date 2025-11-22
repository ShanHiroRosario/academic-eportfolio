// Portfolio Data Structure
// This file stores all portfolio content in a JSON-like structure
// Data persists in localStorage for demo purposes
// For production, consider using a backend or static JSON files

const PortfolioData = {
    // Initialize localStorage if empty
    init: function() {
        if (!localStorage.getItem('portfolioData')) {
            const defaultData = {
                aboutMe: {
                    title: "Your Name",
                    subtitle: "Machine Learning Practitioner | Student",
                    content: "Welcome to my academic e-portfolio! I am a passionate machine learning practitioner dedicated to advancing my knowledge and skills in artificial intelligence and data science.\n\nThis portfolio showcases my academic journey, including activities, projects, and reflections from my coursework. Feel free to explore my work and learn about my experiences."
                },
                profileImage: "https://via.placeholder.com/200",
                certificates: [],
                documents: [],
                sections: {
                    prelims: {
                        activities: [],
                        learningReflection: "Share your experiences, insights, and learnings from the prelims period. Reflect on the challenges you faced, the concepts you mastered, and how these activities contributed to your growth as a machine learning practitioner."
                    },
                    midterms: {
                        activities: [],
                        learningReflection: "Share your experiences, insights, and learnings from the midterms period. Reflect on the challenges you faced, the concepts you mastered, and how these activities contributed to your growth as a machine learning practitioner."
                    },
                    finals: {
                        activities: [],
                        learningReflection: "Share your experiences, insights, and learnings from the finals period. Reflect on the challenges you faced, the concepts you mastered, and how these activities contributed to your growth as a machine learning practitioner."
                    }
                }
            };
            localStorage.setItem('portfolioData', JSON.stringify(defaultData));
        }
    },

    // Get all data
    getAll: function() {
        this.init();
        const localData = localStorage.getItem('portfolioData');
        if (localData) {
            return JSON.parse(localData);
        }
        return this.getDefaultData();
    },

    // Get default/empty data structure
    getDefaultData: function() {
        return {
            aboutMe: {
                title: "Your Name",
                subtitle: "Machine Learning Practitioner | Student",
                content: "Welcome to my academic e-portfolio! I am a passionate machine learning practitioner dedicated to advancing my knowledge and skills in artificial intelligence and data science.\n\nThis portfolio showcases my academic journey, including activities, projects, and reflections from my coursework. Feel free to explore my work and learn about my experiences."
            },
            profileImage: "https://via.placeholder.com/200",
            certificates: [],
            documents: [],
            sections: {
                prelims: {
                    activities: [],
                    learningReflection: "Share your experiences, insights, and learnings from the prelims period. Reflect on the challenges you faced, the concepts you mastered, and how these activities contributed to your growth as a machine learning practitioner."
                },
                midterms: {
                    activities: [],
                    learningReflection: "Share your experiences, insights, and learnings from the midterms period. Reflect on the challenges you faced, the concepts you mastered, and how these activities contributed to your growth as a machine learning practitioner."
                },
                finals: {
                    activities: [],
                    learningReflection: "Share your experiences, insights, and learnings from the finals period. Reflect on the challenges you faced, the concepts you mastered, and how these activities contributed to your growth as a machine learning practitioner."
                }
            }
        };
    },

    // Save all data
    saveAll: function(data) {
        localStorage.setItem('portfolioData', JSON.stringify(data));
        // Also try to save to server (if available)
        this.saveToServer(data);
    },

    // Save data to server JSON file
    saveToServer: async function(data) {
        // Only try on localhost
        if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            return; // Don't try on GitHub Pages
        }
        
        try {
            await fetch('http://localhost:3000/api/save-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } catch (error) {
            // Server might not be running or endpoint not available - that's okay
            console.log('Could not save to server (this is normal if server endpoint not set up)');
        }
    },

    // Load data from server JSON file (fallback)
    loadFromServer: async function() {
        // Only try on localhost
        if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            return null;
        }
        
        try {
            const response = await fetch('http://localhost:3000/api/load-data');
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            // Server might not be running - that's okay
        }
        return null;
    },

    // About Me methods
    getAboutMe: function() {
        const data = this.getAll();
        return data.aboutMe;
    },

    updateAboutMe: function(updates) {
        const data = this.getAll();
        data.aboutMe = { ...data.aboutMe, ...updates };
        this.saveAll(data);
    },

    // Profile Image methods
    getProfileImage: function() {
        const data = this.getAll();
        return data.profileImage;
    },

    updateProfileImage: function(imageUrl) {
        const data = this.getAll();
        data.profileImage = imageUrl;
        this.saveAll(data);
    },

    // Document methods
    getDocuments: function() {
        const data = this.getAll();
        return data.documents || [];
    },

    addDocument: function(document) {
        const data = this.getAll();
        if (!data.documents) data.documents = [];
        document.id = Date.now().toString();
        data.documents.push(document);
        this.saveAll(data);
        return document.id;
    },

    getDocument: function(id) {
        const data = this.getAll();
        const documents = data.documents || [];
        return documents.find(doc => doc.id === id);
    },

    updateDocument: function(id, updates) {
        const data = this.getAll();
        const documents = data.documents || [];
        const index = documents.findIndex(doc => doc.id === id);
        if (index !== -1) {
            documents[index] = { ...documents[index], ...updates };
            this.saveAll(data);
            return true;
        }
        return false;
    },

    deleteDocument: function(id) {
        const data = this.getAll();
        data.documents = (data.documents || []).filter(doc => doc.id !== id);
        this.saveAll(data);
    },

    // Certificates methods
    getCertificates: function() {
        const data = this.getAll();
        return data.certificates || [];
    },

    addCertificate: function(certificate) {
        const data = this.getAll();
        if (!data.certificates) data.certificates = [];
        certificate.id = Date.now().toString();
        data.certificates.push(certificate);
        this.saveAll(data);
        return certificate.id;
    },

    deleteCertificate: function(id) {
        const data = this.getAll();
        data.certificates = data.certificates.filter(cert => cert.id !== id);
        this.saveAll(data);
    },

    // Section Activities methods
    getSectionActivities: function(section) {
        const data = this.getAll();
        return data.sections[section]?.activities || [];
    },

    addActivity: function(section, activity) {
        const data = this.getAll();
        if (!data.sections[section]) {
            data.sections[section] = { activities: [], learningReflection: "" };
        }
        if (!data.sections[section].activities) {
            data.sections[section].activities = [];
        }
        activity.id = Date.now().toString();
        activity.images = activity.images || [];
        data.sections[section].activities.push(activity);
        this.saveAll(data);
        return activity.id;
    },

    updateActivity: function(section, activityId, updates) {
        const data = this.getAll();
        const activities = data.sections[section].activities;
        const index = activities.findIndex(act => act.id === activityId);
        if (index !== -1) {
            activities[index] = { ...activities[index], ...updates };
            this.saveAll(data);
            return true;
        }
        return false;
    },

    deleteActivity: function(section, activityId) {
        const data = this.getAll();
        data.sections[section].activities = data.sections[section].activities.filter(
            act => act.id !== activityId
        );
        this.saveAll(data);
    },

    // Learning Reflection methods
    getLearningReflection: function(section) {
        const data = this.getAll();
        return data.sections[section]?.learningReflection || "";
    },

    updateLearningReflection: function(section, reflection) {
        const data = this.getAll();
        if (!data.sections[section]) {
            data.sections[section] = { activities: [], learningReflection: "" };
        }
        data.sections[section].learningReflection = reflection;
        this.saveAll(data);
    },

    // Image management for activities
    // Images now stored as objects with url and description
    addActivityImage: function(section, activityId, imageData) {
        const data = this.getAll();
        const activities = data.sections[section].activities;
        const activity = activities.find(act => act.id === activityId);
        if (activity) {
            if (!activity.images) activity.images = [];
            // Support both old format (string) and new format (object)
            const imageObj = typeof imageData === 'string' 
                ? { url: imageData, description: '' }
                : imageData;
            activity.images.push(imageObj);
            this.saveAll(data);
            return true;
        }
        return false;
    },

    updateActivityImage: function(section, activityId, imageIndex, updates) {
        const data = this.getAll();
        const activities = data.sections[section].activities;
        const activity = activities.find(act => act.id === activityId);
        if (activity && activity.images && activity.images[imageIndex]) {
            // Convert old format to new format if needed
            if (typeof activity.images[imageIndex] === 'string') {
                activity.images[imageIndex] = { url: activity.images[imageIndex], description: '' };
            }
            activity.images[imageIndex] = { ...activity.images[imageIndex], ...updates };
            this.saveAll(data);
            return true;
        }
        return false;
    },

    deleteActivityImage: function(section, activityId, imageIndex) {
        const data = this.getAll();
        const activities = data.sections[section].activities;
        const activity = activities.find(act => act.id === activityId);
        if (activity && activity.images) {
            activity.images.splice(imageIndex, 1);
            this.saveAll(data);
            return true;
        }
        return false;
    },

    // Helper to get image URL (handles both old and new formats)
    getImageUrl: function(image) {
        return typeof image === 'string' ? image : image.url;
    },

    // Helper to get image description (handles both old and new formats)
    getImageDescription: function(image) {
        return typeof image === 'string' ? '' : (image.description || '');
    }
};

// Initialize data on page load
PortfolioData.init();

