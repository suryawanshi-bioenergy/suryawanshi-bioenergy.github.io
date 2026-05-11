import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderProducts } from './components/Products.js';
import { renderProcess } from './components/Process.js';
import { renderFAQ } from './components/FAQ.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { initAnimations } from './utils/animations.js';
import { initNavigation } from './utils/navigation.js';
import { initContactForm } from './utils/contact.js';

// Global Styles
import './styles/style.css';

const app = document.querySelector('#app');

const initApp = () => {
    app.innerHTML = `
        ${renderHeader()}
        <main>
            ${renderHero()}
            ${renderAbout()}
            ${renderProducts()}
            ${renderProcess()}
            <section class="section">
                <div class="container">
                    ${renderFAQ()}
                </div>
            </section>
            ${renderContact()}
        </main>
        ${renderFooter()}
    `;

    // Initialize logic
    initAnimations();
    initNavigation();
    initContactForm();
};

initApp();
