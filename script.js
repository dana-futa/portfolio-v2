/** Store user facing strings for ease of update and for if I ever want to add translations. */
const userFacingStrings = {
    // viewA11yMode: 'The following screens contain various animations and simple games. If you would like to view my portfolio without these features, need reduced motion, or greater accessibility, please click "Accessibility Mode". Thank you for visiting!',
    nav_a11yMode: 'Accessibility Mode',
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_education: 'Education',
    nav_certifications: 'Certifications',
    nav_contact: 'Contact',
    
    viewA11yMode: 'View in "Accessibility Mode"'
};

/** Set user facing strings */
document.getElementById('nav-a11y-mode').textContent = userFacingStrings.nav_a11yMode;
document.getElementById('nav-about').textContent = userFacingStrings.nav_about;
document.getElementById('nav-experience').textContent = userFacingStrings.nav_experience;
document.getElementById('nav-projects').textContent = userFacingStrings.nav_projects;
document.getElementById('nav-skills').textContent = userFacingStrings.nav_skills;
document.getElementById('nav-education').textContent = userFacingStrings.nav_education;
document.getElementById('nav-certifications').textContent = userFacingStrings.nav_certifications;
document.getElementById('nav-contact').textContent = userFacingStrings.nav_contact;

document.getElementById('view-a11y-mode').textContent = userFacingStrings.viewA11yMode;

function toggleNav() {
    // toggle nav visibility
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('hide-nav');

    // toggle WAI-ARIA aria -expanded value
    const navButton = document.getElementById('nav-button');
    const isAriaExpanded = navButton.getAttribute('aria-expanded');
    navButton.setAttribute('aria-expanded', isAriaExpanded === 'true' ? 'false' : 'true');
}
