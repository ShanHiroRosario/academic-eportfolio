# Quick Push to GitHub - Copy & Paste Commands

## Quick Start (Copy these commands one by one)

```bash
# 1. Navigate to your project folder
cd C:\Users\HERO\Downloads\Eportfolio2

# 2. Initialize git (skip if already done)
git init

# 3. Check what will be committed
git status

# 4. Add all files
git add .

# 5. Commit
git commit -m "Initial commit: Academic E-Portfolio with all content"

# 6. Set branch name (if needed)
git branch -M main

# 7. Add GitHub remote (REPLACE with your GitHub username and repo name)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 8. Push to GitHub
git push -u origin main
```

## Before Step 7: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `academic-eportfolio` (or your choice)
3. Click **"Create repository"**
4. Copy the repository URL it shows you
5. Use that URL in Step 7 above

## Example (Replace with YOUR details)

If your GitHub username is `johndoe` and repo name is `my-portfolio`:

```bash
git remote add origin https://github.com/johndoe/my-portfolio.git
git push -u origin main
```

## Enable GitHub Pages After Pushing

1. Go to: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/settings/pages`
2. Source: **main** branch, **/ (root)** folder
3. Click **Save**
4. Wait 2 minutes, then visit: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

**Note:** The `npm run dev` server can keep running - it won't interfere with git operations!

