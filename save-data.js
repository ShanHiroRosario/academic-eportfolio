// Script to save portfolio data from localStorage to JSON file
// Run this in browser console or as a Node.js script

const fs = require('fs');
const path = require('path');

// This function can be called from the browser console to export data
function exportPortfolioDataToFile() {
    const data = localStorage.getItem('portfolioData');
    if (!data) {
        console.log('No portfolio data found in localStorage');
        return;
    }
    
    const dataStr = JSON.stringify(JSON.parse(data), null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log('Portfolio data exported! Save this file in your project root as portfolio-data.json');
}

// Make it available globally
if (typeof window !== 'undefined') {
    window.exportPortfolioDataToFile = exportPortfolioDataToFile;
}

