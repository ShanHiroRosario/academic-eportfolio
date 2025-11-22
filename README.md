# Academic E-Portfolio

A professional and beautiful academic e-portfolio website for showcasing your academic journey, activities, certificates, and learning reflections.

## Features

- **About Me Section**: Personal homepage with profile information, certificates, and seminars
- **Academic Sections**: Three main sections (Prelims, Midterms, Finals) with dedicated pages
- **Activity Management**: Add, view, and manage activities for each academic period
- **Image Gallery**: Upload and display supporting images (confusion matrices, model pipelines, code screenshots, etc.)
- **Learning Reflections**: Write and save reflective essays for each term
- **File-Based Storage**: All uploaded files are saved to the project folder and committed to git
- **Professional Design**: Modern, responsive design that works on all devices
- **GitHub Pages Ready**: Easily deployable to GitHub Pages with all your content

## Project Structure

```
Eportfolio2/
│
├── index.html          # Homepage (About Me)
├── prelims.html        # Prelims section page
├── midterms.html       # Midterms section page
├── finals.html         # Finals section page
├── activity.html       # Individual activity detail page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── data.js             # Data management (localStorage for metadata)
├── server.js           # Local development server for file uploads
├── package.json        # Node.js dependencies
├── assets/             # Uploaded files (images, PDFs, etc.)
│   ├── profile/        # Profile pictures
│   ├── certificates/   # Certificate images
│   ├── activities/     # Activity images
│   │   ├── prelims/
│   │   ├── midterms/
│   │   └── finals/
│   └── documents/      # PDF documents
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- Git (for version control)

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd Eportfolio2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Development Workflow

**Important:** You must run the development server (`npm run dev`) to upload files!

1. **Start the server**: Run `npm run dev` in your terminal
2. **Build your portfolio**: Upload files, add content, create activities
3. **Files are automatically saved**: All uploaded files go to the `assets/` folder
4. **Commit to git**: 
   ```bash
   git add .
   git commit -m "Add portfolio content"
   git push
   ```
5. **Files will be on GitHub Pages**: When you push, all your files are included

### Data Storage

- **Metadata** (titles, descriptions, text content): Stored in browser localStorage
- **Files** (images, PDFs): Saved to `assets/` folder in the project
- **Both are needed**: Metadata tracks your content, files are the actual assets

**Important Notes:**
- Always run the development server when adding/editing content
- Files in `assets/` folder will be committed to git and visible on GitHub Pages
- Visitors to your GitHub Pages site will see all your uploaded files

## Deployment to GitHub Pages

### Method 1: Using GitHub's Web Interface

1. Push your code (including `assets/` folder) to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit with portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repository-name>.git
   git push -u origin main
   ```

2. Go to your repository settings on GitHub
3. Scroll down to "Pages" section
4. Under "Source", select the branch (usually `main` or `master`)
5. Select the root folder (`/`)
6. Click "Save"
7. Your site will be available at `https://<username>.github.io/<repository-name>`

### Method 2: Using GitHub CLI

```bash
# After pushing your code
gh repo create <repository-name> --public --source=. --remote=origin --push
```

Then enable GitHub Pages in repository settings (Method 1, steps 2-7).

## Usage Guide

### Adding Content

1. **Edit About Me**: 
   - Click "Edit Mode" button on the About Me section
   - Click on the text you want to edit
   - Type your content
   - Click outside to save

2. **Add Profile Picture**:
   - Click the edit icon on your profile picture
   - Select an image file
   - Image is saved to `assets/profile/` folder

3. **Add Certificates**:
   - Click "Add Certificate" button
   - Fill in certificate details
   - Upload an image file
   - Image is saved to `assets/certificates/` folder

4. **Add Activities**:
   - Navigate to Prelims, Midterms, or Finals page
   - Click "Add Activity"
   - Fill in activity details
   - Click on an activity to view/edit and add supporting images
   - Images are saved to `assets/activities/<section>/` folder

5. **Write Learning Reflections**:
   - Navigate to any academic section
   - Scroll to "Learning Reflection" section
   - Click "Edit Mode"
   - Type your reflection
   - Click outside to save

### File Management

- All uploaded files are automatically saved to the `assets/` folder
- Files are organized by type (profile, certificates, activities, documents)
- When you delete content, the associated files are also deleted
- **Always commit the `assets/` folder to git** so files appear on GitHub Pages

### Tips for Machine Learning Practitioners

- Use clear, high-resolution images for:
  - Confusion matrices
  - Model architecture diagrams
  - Pipeline flowcharts
  - Code snippets and outputs
  - Results visualizations

- Organize activities chronologically within each term
- Write detailed descriptions explaining your approach and findings
- Use Learning Reflections to discuss:
  - Challenges faced
  - Concepts learned
  - Improvements made
  - Future plans

## Troubleshooting

### "Failed to upload" error
- Make sure the development server is running: `npm run dev`
- Check that port 3000 is not in use by another application

### Files not appearing on GitHub Pages
- Ensure you committed and pushed the `assets/` folder
- Check that file paths in localStorage match the uploaded files
- Clear browser cache and reload

### Images not loading locally
- Make sure you're accessing the site through `http://localhost:3000` (not file://)
- Verify the server is running

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade for hover */
    --accent-color: #3b82f6;       /* Accent color */
    /* ... more variables ... */
}
```

### Adding More Sections

To add more academic sections:

1. Create a new HTML file (e.g., `assignments.html`)
2. Copy the structure from `prelims.html`
3. Update the navigation in all HTML files
4. Update `data.js` to include the new section in the data structure
5. Add the section folder in `assets/activities/`

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Node.js & Express (for file uploads)
- Multer (for file handling)
- localStorage API (for metadata)
- Font Awesome Icons

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please open an issue on the GitHub repository.

---

**Note**: Always run `npm run dev` when working on your portfolio to enable file uploads. Files uploaded without the server running will not be saved to the project folder.
