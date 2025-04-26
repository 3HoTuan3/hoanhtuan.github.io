import '../css/style2.css';
import initScrollReveal from './scroll-reveal';

// Helper functions
function createSectionNav() {
    const sections = document.querySelectorAll('section[id]');
    const nav = document.createElement('div');
    nav.className = 'section-nav';

    sections.forEach(section => {
        const dot = document.createElement('div');
        dot.className = 'section-nav-dot';
        dot.setAttribute('data-target', `#${section.id}`);
        dot.title = section.querySelector('.section-title')?.textContent || section.id;
        nav.appendChild(dot);
    });

    document.body.appendChild(nav);
}

function updateSlider() {
    const activeLink = document.querySelector('.nav-links a.active');
    const slider = document.querySelector('.nav-links .slider');

    if (activeLink && slider) {
        const linkRect = activeLink.getBoundingClientRect();
        const navLinksRect = document.querySelector('.nav-links').getBoundingClientRect();

        // Tính toán vị trí và chiều rộng
        const leftPosition = linkRect.left - navLinksRect.left + activeLink.offsetWidth / 2 - linkRect.width / 2;
        const width = linkRect.width;

        slider.style.width = `${width}px`;
        slider.style.left = `${leftPosition}px`;
    }
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Cập nhật active dot
            document.querySelectorAll('.section-nav-dot').forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('data-target') === `#${sectionId}`) {
                    dot.classList.add('active');
                }
            });

            // Cập nhật active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Cập nhật vị trí thanh trượt
    updateSlider();
}

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize scroll reveal effect
    initScrollReveal();

    // Create section navigation dots
    createSectionNav();

    // Add smooth scrolling for nav links and section dots
    document.querySelectorAll('.nav-links a, .section-nav-dot').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href') || this.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            // Xóa active khỏi tất cả link
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            // Thêm active cho link được click
            this.classList.add('active');
            // Cập nhật thanh trượt
            updateSlider();
        });
    });
    // Update active section on scroll
    window.addEventListener('scroll', function () {
        updateActiveSection();
    });

    // Activate the first section when page loads
    updateActiveSection();
});