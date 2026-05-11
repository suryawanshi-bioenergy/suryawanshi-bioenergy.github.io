import { renderHeader } from './src/components/Header.js';
import { renderHero } from './src/components/Hero.js';
import { renderAbout } from './src/components/About.js';
import { renderProducts } from './src/components/Products.js';
import { renderProcess, initProcess } from './src/components/Process.js';
import { renderContact } from './src/components/Contact.js';
import { renderFooter } from './src/components/Footer.js';
import { initAnimations } from './src/utils/animations.js';
import { initNavigation } from './src/utils/navigation.js';

// Styles
import './src/styles/style.css';

const app = document.querySelector('#app');

const initApp = () => {
    app.innerHTML = `
        ${renderHeader()}
        <main>
            ${renderHero()}
            ${renderAbout()}
            ${renderProducts()}
            ${renderProcess()}
            ${renderContact()}
        </main>
        ${renderFooter()}
    `;

    // Initialize interactive elements
    initProcess();
    initAnimations();
    initNavigation();
};

initApp();
