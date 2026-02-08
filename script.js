gsap.registerPlugin(ScrollTrigger);

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    html.classList.add('light-mode');
    themeToggle.textContent = '🌙';
} else {
    html.classList.remove('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('light-mode');
    const isLight = html.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌙' : '☀️';
});

// MOBILE MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close menu when link clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});

// NAVBAR SCROLL EFFECT
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// SMOOTH SCROLL
function smoothScroll(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// HERO ANIMATIONS
gsap.to('.hero-text h1', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
});

gsap.to('.hero-text p', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.35
});

gsap.to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.5
});

gsap.to('.hero-image', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.3
});

// ABOUT ANIMATIONS
document.querySelectorAll('.about-content h2, .about-content p, .stat-card, .about-image').forEach((el, i) => {
    gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            once: true
        }
    });
});

// PROJECTS HEADER
document.querySelectorAll('.projects-header p, .projects-header h2').forEach((el, i) => {
    gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 70%',
            once: true
        }
    });
});

// PROJECT ITEMS
document.querySelectorAll('.project-item').forEach((item, i) => {
    gsap.from(item, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            once: true
        }
    });
});

// DESIGN ANIMATIONS
document.querySelectorAll('.design-header p, .design-header h2').forEach((el, i) => {
    gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: '.design-header',
            start: 'top 70%',
            once: true
        }
    });
});

document.querySelectorAll('.design-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
        }
    });
});

// SKILLS ANIMATIONS
document.querySelectorAll('.skills-header p, .skills-header h2').forEach((el, i) => {
    gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: '.skills-header',
            start: 'top 70%',
            once: true
        }
    });
});

document.querySelectorAll('.skill-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.08,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
        }
    });
});

// FOOTER
gsap.from('.footer-inner', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 85%',
        once: true
    }
});