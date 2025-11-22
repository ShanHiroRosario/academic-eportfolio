# GitHub Setup Guide

## Step-by-Step Instructions to Upload Your Portfolio to GitHub

### Prerequisites
- Git installed on your computer ([Download here](https://git-scm.com/downloads) if needed)
- A GitHub account ([Sign up here](https://github.com/signup) if needed)

---

## Method 1: Using Command Line (Recommended)

### Step 1: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`, type `cmd`, press Enter
- Or search "Command Prompt" or "PowerShell"

**Mac/Linux:**
- Press `Cmd + Space` (Mac) or `Ctrl + Alt + T` (Linux)
- Type "Terminal"

### Step 2: Navigate to Your Project Folder

```bash
cd C:\Users\HERO\Downloads\Eportfolio2
```

*(Replace with your actual project path if different)*

### Step 3: Initialize Git (if not already done)

```bash
git init
```

### Step 4: Check What Files Will Be Added

```bash
git status
```

You should see all your files listed. Make sure:
- ✅ `assets/` folder is there
- ✅ `portfolio-data.json` is there (if it exists)
- ❌ `node_modules/` is NOT listed (it's in .gitignore)

### Step 5: Add All Files

```bash
git add .
```

This stages all files for commit (except those in .gitignore).

### Step 6: Make Your First Commit

```bash
git commit -m "Initial commit: Academic E-Portfolio"
```

### Step 7: Create a Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right
3. Click **"New repository"**
4. Fill in the details:
   - **Repository name**: `academic-eportfolio` (or any name you like)
   - **Description**: "Academic E-Portfolio - Machine Learning Course Portfolio"
   - **Visibility**: Choose **Public** (required for free GitHub Pages) or **Private**
   - **DO NOT** check "Initialize with README" (you already have files)
   - **DO NOT** add .gitignore or license (you already have them)
5. Click **"Create repository"**

### Step 8: Connect Your Local Repository to GitHub

GitHub will show you commands. Use these (replace `<your-username>` and `<repository-name>`):

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

**Example:**
If your username is `johndoe` and repository is `academic-eportfolio`:
```bash
git branch -M main
git remote add origin https://github.com/johndoe/academic-eportfolio.git
git push -u origin main
```

### Step 9: Enter GitHub Credentials

When prompted:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your GitHub password)
  - Get one here: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Check "repo" permissions
  - Copy the token and use it as your password

---

## Method 2: Using GitHub Desktop (Easier for Beginners)

### Step 1: Download GitHub Desktop
- Download from: https://desktop.github.com/
- Install and sign in with your GitHub account

### Step 2: Add Your Repository
1. Open GitHub Desktop
2. Click **"File"** → **"Add Local Repository"**
3. Browse to: `C:\Users\HERO\Downloads\Eportfolio2`
4. Click **"Add repository"**

### Step 3: Commit Your Files
1. You'll see all your files listed
2. Write a commit message: "Initial commit: Academic E-Portfolio"
3. Click **"Commit to main"**

### Step 4: Publish to GitHub
1. Click **"Publish repository"** button (top right)
2. Choose:
   - Repository name (e.g., `academic-eportfolio`)
   - Description (optional)
   - Keep private (uncheck if you want it public)
3. Click **"Publish repository"**

---

## After Pushing to GitHub

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top menu)
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Branch: **main** (or **master**)
   - Folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub Pages to build
7. Your site will be live at:
   ```
   https://<your-username>.github.io/<repository-name>/
   ```

---

## Important Files to Commit

Make sure these are committed:
- ✅ `assets/` folder (with all your uploaded files)
- ✅ `portfolio-data.json` (contains your portfolio metadata)
- ✅ All HTML, CSS, JS files
- ✅ `package.json` and `server.js`
- ✅ `.gitignore`

Should NOT be committed:
- ❌ `node_modules/` (automatically ignored)
- ❌ `.env` files (if any)
- ❌ Temporary files

---

## Future Updates

After making changes locally:

```bash
# Add changes
git add .

# Commit with a message
git commit -m "Update portfolio: Added new activities"

# Push to GitHub
git push
```

---

## Troubleshooting

### "Git is not recognized"
- Install Git: https://git-scm.com/downloads
- Restart your terminal after installation

### "Authentication failed"
- Use Personal Access Token instead of password
- Get token: https://github.com/settings/tokens

### "Repository already exists"
- Your project already has git initialized
- Skip `git init` step

### "Permission denied"
- Check your GitHub credentials
- Make sure you have write access to the repository

---

## Quick Command Reference

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# See all remotes
git remote -v

# View commit history
git log
```

