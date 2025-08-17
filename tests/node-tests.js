// Node.js test script for the website
const fs = require('fs');
const path = require('path');

// Test configuration
const config = {
    rootDir: path.join(__dirname, '..'),
    htmlFiles: ['index.html', 'gallery.html'],
    assetsDir: 'assets',
    expectedImages: [
        'Bough_Pot1.webp', 'Bough_Pot2.webp', 
        'Cache_Pot1.webp', 'Cache_Pot2.webp', 'Cache_Pot3.webp',
        'Email.webp', 'instagram.svg', 'lion-urn.webp', 
        'Logo.webp', 'Vase1.webp', 'Vase2.webp', 'Vase3.webp'
    ]
};

// Test functions
async function checkFileExists(filePath) {
    try {
        await fs.promises.access(filePath, fs.constants.F_OK);
        return { success: true, message: 'File exists' };
    } catch (error) {
        return { success: false, message: 'File does not exist' };
    }
}

async function checkHtmlStructure(filePath) {
    try {
        const html = await fs.promises.readFile(filePath, 'utf8');
        
        // Check for required elements
        const hasTitle = /<title>.*<\/title>/i.test(html);
        const hasNav = /<nav/i.test(html);
        const hasSection = /<section/i.test(html);
        const hasFooter = /<footer/i.test(html);
        
        if (hasTitle && hasNav && hasSection && hasFooter) {
            return { success: true, message: 'HTML structure is valid' };
        } else {
            return { success: false, message: 'Missing required HTML elements' };
        }
    } catch (error) {
        return { success: false, message: `Failed to read file: ${error.message}` };
    }
}

async function checkImageReferences(filePath) {
    try {
        const html = await fs.promises.readFile(filePath, 'utf8');
        const imageMatches = html.match(/src=["'](assets\/[^"']+\.(webp|svg))["']/g);
        
        if (!imageMatches) {
            return { success: true, message: 'No image references found' };
        }
        
        const imagePaths = imageMatches.map(match => {
            const pathMatch = match.match(/src=["'](assets\/[^"']+\.(webp|svg))["']/);
            return pathMatch ? pathMatch[1] : null;
        }).filter(Boolean);
        
        // Check if all referenced images exist
        const missingImages = [];
        for (const imagePath of imagePaths) {
            const fullPath = path.join(config.rootDir, imagePath);
            const exists = await checkFileExists(fullPath);
            if (!exists.success) {
                missingImages.push(imagePath);
            }
        }
        
        if (missingImages.length === 0) {
            return { success: true, message: `All ${imagePaths.length} image references are valid` };
        } else {
            return { success: false, message: `Missing images: ${missingImages.join(', ')}` };
        }
    } catch (error) {
        return { success: false, message: `Failed to check image references: ${error.message}` };
    }
}

async function checkAssetsDirectory() {
    try {
        const files = await fs.promises.readdir(path.join(config.rootDir, config.assetsDir));
        const missingImages = config.expectedImages.filter(img => !files.includes(img));
        
        if (missingImages.length === 0) {
            return { success: true, message: 'All expected images are present' };
        } else {
            return { success: false, message: `Missing images: ${missingImages.join(', ')}` };
        }
    } catch (error) {
        return { success: false, message: `Failed to read assets directory: ${error.message}` };
    }
}

// Main test runner
async function runTests() {
    console.log('Running website tests...\n');
    
    let passedTests = 0;
    const totalTests = config.htmlFiles.length * 3 + 1; // 3 tests per HTML file + 1 for assets
    
    // Test each HTML file
    for (const htmlFile of config.htmlFiles) {
        const filePath = path.join(config.rootDir, htmlFile);
        console.log(`Testing ${htmlFile}:`);
        
        // Check if file exists
        const exists = await checkFileExists(filePath);
        console.log(`  File exists: ${exists.success ? 'PASS' : 'FAIL'} - ${exists.message}`);
        if (exists.success) passedTests++;
        
        // Check HTML structure
        const structure = await checkHtmlStructure(filePath);
        console.log(`  HTML structure: ${structure.success ? 'PASS' : 'FAIL'} - ${structure.message}`);
        if (structure.success) passedTests++;
        
        // Check image references
        const images = await checkImageReferences(filePath);
        console.log(`  Image references: ${images.success ? 'PASS' : 'FAIL'} - ${images.message}`);
        if (images.success) passedTests++;
        
        console.log('');
    }
    
    // Check assets directory
    console.log('Testing assets directory:');
    const assets = await checkAssetsDirectory();
    console.log(`  Assets directory: ${assets.success ? 'PASS' : 'FAIL'} - ${assets.message}`);
    if (assets.success) passedTests++;
    
    // Final summary
    console.log(`\nTest Results: ${passedTests}/${totalTests} tests passed`);
    
    if (passedTests === totalTests) {
        console.log('All tests passed! 🎉');
        process.exit(0);
    } else {
        console.log('Some tests failed. Please review the issues above.');
        process.exit(1);
    }
}

// Run tests if this script is executed directly
if (require.main === module) {
    runTests().catch(error => {
        console.error('Test runner error:', error);
        process.exit(1);
    });
}

// Export for use in other files
module.exports = {
    checkFileExists,
    checkHtmlStructure,
    checkImageReferences,
    checkAssetsDirectory,
    runTests
};