# Manual Setup Guide

## How to Add Your Content Manually

All content is now managed in **`portfolio-content.js`**. Just edit this file directly!

---

## Step-by-Step Instructions

### 1. Profile Picture

1. Save your image to: `assets/profile/your-image.jpg` (or .png)
2. Open `portfolio-content.js`
3. Find this line:
   ```javascript
   profileImage: "assets/profile/your-image.jpg",
   ```
4. Change `"your-image.jpg"` to your actual filename:
   ```javascript
   profileImage: "assets/profile/my-photo.jpg",
   ```

---

### 2. About Me Section

1. Open `portfolio-content.js`
2. Find the `aboutMe` section
3. Edit the content:
   ```javascript
   aboutMe: {
       title: "Your Name",  // Change this
       subtitle: "Machine Learning Practitioner | Student",  // Change this
       content: `Your text here...`  // Change this
   }
   ```

**For PDF Document Link:**
In the `content` field, use this format:
```javascript
content: `Your text here...

Note: You can preview it here: <a href="#" class="document-link" onclick="openPdfModal('1exercise.pdf'); return false;">Document</a>`
```

Replace `'1exercise.pdf'` with your actual PDF filename (file should be in `assets/documents/`)

---

### 3. Documents (PDFs)

1. Save your PDF to: `assets/documents/1exercise.pdf`
2. Open `portfolio-content.js`
3. Find the `documents` array
4. Add your document:
   ```javascript
   documents: [
       {
           filename: "1exercise.pdf",  // Just the filename
           name: "Document"  // Display name
       }
   ]
   ```

**To link in About Me:**
Use: `onclick="openPdfModal('1exercise.pdf')"` in your About Me content

---

### 4. Certificates

1. Save your certificate image to: `assets/certificates/cert1.jpg`
2. Open `portfolio-content.js`
3. Find the `certificates` array
4. Add your certificate:
   ```javascript
   certificates: [
       {
           title: "Certificate Name",
           date: "January 2024",
           issuer: "Organization Name",
           image: "assets/certificates/cert1.jpg"  // Full path
       }
   ]
   ```

---

### 5. Activities

1. Save your activity images to:
   - `assets/activities/prelims/` for prelim activities
   - `assets/activities/midterms/` for midterm activities
   - `assets/activities/finals/` for final activities

2. Open `portfolio-content.js`
3. Find the `activities` section
4. Add an activity:
   ```javascript
   activities: {
       prelims: [
           {
               id: "1",  // Unique ID (use "2", "3", etc. for more)
               title: "Activity Title",
               description: "Activity description",
               date: "January 15, 2024",
               thumbnail: "assets/activities/prelims/thumb1.jpg",  // Preview image
               images: [
                   {
                       url: "assets/activities/prelims/image1.jpg",
                       description: "Description of this image (e.g., confusion matrix showing 95% accuracy)"
                   },
                   {
                       url: "assets/activities/prelims/image2.jpg",
                       description: "Model pipeline architecture"
                   }
               ]
           }
       ]
   }
   ```

**Important:**
- `thumbnail` = Image shown on prelims/midterms/finals page
- `images` = Images shown on the activity detail page
- Each image needs a `url` (file path) and `description` (explanation)

---

### 6. Learning Reflections

1. Open `portfolio-content.js`
2. Find the `reflections` section
3. Edit the text:
   ```javascript
   reflections: {
       prelims: "Your reflection text here...",
       midterms: "Your reflection text here...",
       finals: "Your reflection text here..."
   }
   ```

---

## File Structure

Make sure your files are organized like this:

```
Eportfolio2/
├── assets/
│   ├── profile/
│   │   └── your-photo.jpg
│   ├── certificates/
│   │   └── cert1.jpg
│   ├── documents/
│   │   └── 1exercise.pdf
│   └── activities/
│       ├── prelims/
│       │   ├── thumb1.jpg
│       │   ├── image1.jpg
│       │   └── image2.jpg
│       ├── midterms/
│       └── finals/
└── portfolio-content.js  ← Edit this file!
```

---

## Examples

### Example: Adding a Certificate

```javascript
certificates: [
    {
        title: "Machine Learning Fundamentals",
        date: "January 2024",
        issuer: "Coursera",
        image: "assets/certificates/ml-cert.jpg"
    }
]
```

### Example: Adding an Activity

```javascript
activities: {
    prelims: [
        {
            id: "1",
            title: "Classification Project",
            description: "Built a classification model using scikit-learn",
            date: "January 20, 2024",
            thumbnail: "assets/activities/prelims/project-thumb.jpg",
            images: [
                {
                    url: "assets/activities/prelims/confusion-matrix.jpg",
                    description: "Confusion matrix showing 95% accuracy. The model performed well with minimal false positives."
                },
                {
                    url: "assets/activities/prelims/pipeline.jpg",
                    description: "Model pipeline: Data preprocessing → Feature selection → Random Forest → Evaluation"
                }
            ]
        }
    ]
}
```

### Example: PDF Link in About Me

```javascript
content: `My Expectations for ITCC508

The document below contains a reflective post based on the required readings and independent research, specifically the Exercise 1. It discusses initial learning about Machine Learning (ML), Deep Learning (DL), and Natural Language Processing (NLP), expectations for this course, and their relevance to my career goals in IT. It should be noted that you will not be downloading the document, simply opening it on this page.

Note: You can preview it here: <a href="#" class="document-link" onclick="openPdfModal('1exercise.pdf'); return false;">Document</a>`
```

---

## After Editing

1. Save `portfolio-content.js`
2. Refresh your browser
3. Your changes will appear!

---

## Pushing to GitHub

After editing `portfolio-content.js`:

```bash
git add portfolio-content.js assets/
git commit -m "Update portfolio content"
git push
```

Your content will appear on GitHub Pages!


