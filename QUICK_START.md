# Quick Start Guide

## First Time Setup

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Choose the LTS version

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Go to: http://localhost:3000
   - You should see your portfolio homepage

## Daily Workflow

### When Adding Content:

1. **Start the server** (if not already running):
   ```bash
   npm run dev
   ```
   Keep this terminal window open!

2. **Build your portfolio**:
   - Upload profile pictures, certificates, activity images
   - Add text content, descriptions, reflections
   - All files are automatically saved to the `assets/` folder

3. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Add portfolio content"
   git push
   ```

### Important Notes:

- ✅ **Always run `npm run dev`** before uploading files
- ✅ **Commit the `assets/` folder** to git so files appear on GitHub Pages
- ✅ Files in `assets/` will be visible to all visitors on GitHub Pages
- ❌ **Don't delete the `assets/` folder** - it contains your uploaded files
- ❌ **Don't ignore `assets/` in `.gitignore`** - it needs to be committed

## File Structure

Your uploaded files are organized like this:

```
assets/
├── profile/              # Profile pictures
├── certificates/         # Certificate images
├── activities/
│   ├── prelims/         # Prelim activity images
│   ├── midterms/        # Midterm activity images
│   └── finals/          # Final activity images
└── documents/           # PDF documents
```

## Troubleshooting

**Problem**: "Failed to upload" error
- **Solution**: Make sure `npm run dev` is running in a terminal

**Problem**: Files not showing on GitHub Pages
- **Solution**: Make sure you committed and pushed the `assets/` folder

**Problem**: Images not loading locally
- **Solution**: Access the site through `http://localhost:3000` (not file://)

## Need Help?

Check the main README.md for detailed documentation.

