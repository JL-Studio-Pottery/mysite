// Test utilities
class WebTester {
    // Check if a URL loads successfully
    static async checkUrl(url) {
        try {
            const response = await fetch(url);
            return {
                success: response.ok,
                status: response.status,
                message: response.ok ? 'Loaded successfully' : `Failed with status ${response.status}`
            };
        } catch (error) {
            return {
                success: false,
                message: `Network error: ${error.message}`
            };
        }
    }

    // Check if an image loads successfully
    static async checkImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ success: true, message: 'Image loaded successfully' });
            img.onerror = () => resolve({ success: false, message: 'Failed to load image' });
            img.src = url;
        });
    }

    // Validate HTML structure
    static async validateHTML(url) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Check for basic required elements
            const hasTitle = !!doc.querySelector('title');
            const hasNav = !!doc.querySelector('nav');
            const hasMain = !!doc.querySelector('main');
            const hasSection = !!doc.querySelector('section');
            const hasFooter = !!doc.querySelector('footer');
            
            return {
                success: hasTitle && hasNav && hasMain && hasSection && hasFooter,
                message: hasTitle && hasNav && hasMain && hasSection && hasFooter ? 
                    'HTML structure is valid' : 
                    'Missing required HTML elements'
            };
        } catch (error) {
            return {
                success: false,
                message: `Failed to parse HTML: ${error.message}`
            };
        }
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebTester;
}