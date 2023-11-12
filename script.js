const ids = {
    aboutContainer: 'about-container',
    experienceContainer: 'experience-container',
    projectsContainer: 'projects-container',
    skillsContainer: 'skills-container',
    educationContainer: 'education-container',
    certificationsAnchor: 'certifications-container',

    experience5: 'experience5',
    experience4: 'experience4',
    experience3: 'experience3',
    experience2: 'experience2',
    experience1: 'experience1',
}

const aboutSection = {
    header: 'About',
    description: 'I am an INNOVATIVE developer that enjoys the CREATIVE process of designing solutions in an AGILE environment. I believe that strong COLLABORATION drives success.',
}

const experienceSection = {
    header: 'Experience',
    experience: [
        {
            id: ids.experience5,
            company: 'General Motors',
            location: 'Chandler, AZ',
            title: 'Software Developer',
            duration: 'July 2020 - October 2023',
            accomplishments: [
                'Received the 2023 Excellence in Technology Award for my vital contributions to eliminating the need for Excel sheets, reducing business process time by 50%, and facilitating the successful launch of the 2024 Cadillac Lyriq.',
                'Collaborated closely with a cross-functional team to design, build, test, and deploy web applications utilizing  Angular, TypeScript, HTML, SCSS, Java, Spring, Node.js, PostgreSQL, Azure DevOps, and PCF.',
            ],
        },
        {
            id: ids.experience4,
            company: 'University of Denver',
            location: 'Denver, CO',
            title: 'Computer Science Teaching Assistant',
            duration: 'September 2019 - June 2020',
            accomplishments: [
                'Simplified object oriented programming (OOP) topics and tutored students in Java for courses Intro to Computer Science 1-3.',
                'Evaluated assignments for Discrete Structures, Intro to Computer Science 1, and Intro to Algorithms & Data Structures, providing detailed feedback for students and professors.',
            ],
        },
        {
            id: ids.experience3,
            company: 'CodeSpire',
            location: 'Denver, CO',
            title: 'Programming Instructor',
            duration: 'February 2018 - August 2018',
            accomplishments: [
                'Instructed students ages 10-18 in building portfolios with HTML, CSS, and vanilla JavaScript, covering topics including page layout, inline styles, style classes, animation, site navigation, and testing.',
                'Performed administrative tasks such as managing course registrations, communicating with customers, handling manager correspondence, and distributing advertisements.',
            ],
        },
        {
            id: ids.experience2,
            company: 'University of Denver',
            location: 'Denver, CO',
            title: 'Coding Summer Camp Instructor',
            duration: 'June 2017 - July 2017',
            accomplishments: [
                'Guided students through building games, animations, photo manipulation programs, and other programs for creating graphical designs utilizing a simplified form of Java known as Processing. ',
                'Taught students fundamental programming concepts such as classes, functions, loops, conditional statements, recursion, and debugging.',
            ],
        },
        {
            id: ids.experience1,
            company: 'Sprouts Farmers Market',
            location: 'Denver, CO',
            title: 'Courtesy Clerk',
            duration: 'June 2016 - August 2016',
            accomplishments: [
                'Efficiently and accurately scanned items, operated cash register, and handled cash and card transactions, keeping a 100% accurate register at end of shift counts.',
                'Ensured customer satisfaction by carefully bagging groceries, considering bag weight for customer convenience and safety, as well as properly bagging items preventing product damage.'
            ],
        },
    ],
}

generateSiteContent();

function createNavigation() {

}

function generateSiteContent() {
    // createAbout();
    createExperience();
    createProjects();
    createSkills();
    createEducation();
    createCertifications();
}

//#region - functions to generate accessible plain format sections
function createAbout() {
    const aboutAnchor = document.getElementById(ids.aboutContainer);
    
    // create About header and description
    const h2 = createElement('h2', aboutSection.header);
    const p = createElement('p', aboutSection.description);

    // append elements to anchor
    aboutAnchor.appendChild(h2);
    aboutAnchor.appendChild(p);
}

function createExperience() {
    const experienceAnchor = document.getElementById(ids.experienceContainer);
    // const h2 = createElement('h2', experienceSection.header); // create Experience header
    // const xpElements = [h2];
    const xpElements = [];

    for(let i = 0; i < experienceSection.experience.length; i++) {
        const xp = experienceSection.experience[i];

        const title = createElement('h3', xp.title, xp.id);
        const company = createElement('div', xp.company, null);
        // const location = createElement('div', xp.location, null);
        const duration = createElement('div', xp.duration, null);
        const accomplishments = createUnorderedList(xp.accomplishments, null);

        xpElements.push(title);
        xpElements.push(company);
        // xpElements.push(location);
        xpElements.push(duration);
        xpElements.push(accomplishments);
    }

    console.log('xpElements', xpElements);
    xpElements.forEach(element => {
        console.log('element', element);
        experienceAnchor.appendChild(element)
    });
}

function createProjects() {

}

function createSkills() {

}

function createEducation() {

}

function createCertifications() {

}
//#endregion - functions to generate accessible plain format sections

function createElement(tag, content, id) {
    const element = document.createElement(tag);

    if (content) {
        const elementContent = document.createTextNode(content);
        element.appendChild(elementContent);
    }

    if (id) {
        element.id = id;
    }

    return element;
}

function createUnorderedList(listItems) {
    const ul = createElement('ul', null, null);

    for(let i = 0; i < listItems.length; i++) {
        const li = createElement('li', listItems[i]);
        ul.appendChild(li);
    }

    return ul;
}

// open and close mobile navigation burger menu
function toggleNav(width) {
    document.getElementById('nav-container').style.width = width;

    const navButton = document.getElementById('nav-button');
    const isAriaExpanded = navButton.getAttribute('aria-expanded');
    navButton.setAttribute('aria-expanded', isAriaExpanded === 'true' ? 'false' : 'true');
}
