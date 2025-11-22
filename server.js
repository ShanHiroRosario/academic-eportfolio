const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve static files from assets folder
app.use('/assets', express.static('assets'));

// Serve the main HTML files
app.use(express.static('.'));

// Ensure assets directories exist
const assetsDirs = [
    'assets/profile',
    'assets/certificates',
    'assets/activities/prelims',
    'assets/activities/midterms',
    'assets/activities/finals',
    'assets/documents'
];

assetsDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const type = req.body.type || 'general';
        let uploadPath = 'assets/';
        
        switch(type) {
            case 'profile':
                uploadPath = 'assets/profile/';
                break;
            case 'certificate':
                uploadPath = 'assets/certificates/';
                break;
            case 'activity':
                const section = req.body.section || 'prelims';
                uploadPath = `assets/activities/${section}/`;
                break;
            case 'document':
                uploadPath = 'assets/documents/';
                break;
            default:
                uploadPath = 'assets/general/';
        }
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        // Generate unique filename: timestamp-originalname
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext).replace(/[^a-z0-9]/gi, '-').toLowerCase();
        cb(null, `${uniqueSuffix}-${name}${ext}`);
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB limit
    }
});

// Upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Log for debugging
    console.log('Upload received:', {
        type: req.body.type,
        section: req.body.section,
        filename: req.file.filename,
        destination: req.file.destination
    });
    
    // Return the relative path from the project root
    const filePath = '/' + req.file.path.replace(/\\/g, '/');
    
    res.json({
        success: true,
        path: filePath,
        filename: req.file.filename,
        originalName: req.file.originalname
    });
});

// Delete file endpoint
app.delete('/api/upload', express.json(), (req, res) => {
    const filePath = req.body.path;
    
    if (!filePath || !filePath.startsWith('/assets/')) {
        return res.status(400).json({ error: 'Invalid file path' });
    }
    
    // Remove leading slash for filesystem path
    const fsPath = filePath.substring(1);
    
    fs.unlink(fsPath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).json({ error: 'Failed to delete file' });
        }
        
        res.json({ success: true });
    });
});

// Save portfolio data to JSON file
app.post('/api/save-data', express.json(), (req, res) => {
    try {
        const data = req.body;
        const filePath = 'portfolio-data.json';
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        res.json({ success: true, message: 'Data saved to portfolio-data.json' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// Load portfolio data from JSON file
app.get('/api/load-data', (req, res) => {
    try {
        const filePath = 'portfolio-data.json';
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            res.json(data);
        } else {
            res.status(404).json({ error: 'No saved data found' });
        }
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ error: 'Failed to load data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio development server running!`);
    console.log(`📝 Open http://localhost:${PORT} in your browser`);
    console.log(`📁 Files will be saved to the 'assets' folder`);
    console.log(`\nPress Ctrl+C to stop the server\n`);
});

