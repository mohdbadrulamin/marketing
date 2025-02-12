import { initializeAOS } from './modules/animations.js';
import { handleScroll } from './modules/scroll.js';
import { handleForms } from './modules/forms.js';
import { loadSection } from './modules/loader.js';

document.addEventListener('DOMContentLoaded', async function() {
    // Load all sections
    const sections = ['hero', 'money-matters', 'benefits', 'stories', 'journey', 'features', 'signup', 'footer'];
    await Promise.all(sections.map(section => loadSection(section)));
    
    // Initialize other features after sections are loaded
    initializeAOS();
    handleScroll();
    handleForms();
});
