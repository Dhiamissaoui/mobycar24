
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Register service worker for caching
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Handle scrolling based on screen size
const handleScrolling = () => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        // Only enable scrolling on desktop
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
        document.body.style.height = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';

        console.log('Scrolling enabled on desktop');
    } else {
        // Disable scrolling on mobile
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.height = '100vh';
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.height = '100vh';

        console.log('Scrolling disabled on mobile');
    }
};

// Force enable scrolling on page load (desktop only)
document.addEventListener('DOMContentLoaded', handleScrolling);

// Handle resize events to switch between desktop and mobile
window.addEventListener('resize', handleScrolling);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
