import '../css/style2.css'
import initScrollReveal from './scroll-reveal';

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
});

initScrollReveal();

// Thêm dots điều hướng section
createSectionNav();

// Xử lý cuộn mượt khi click nav links
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

// Cập nhật active section khi cuộn
window.addEventListener('scroll', function () {
    updateActiveSection();
});

// Xử lý menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
}

// Kích hoạt section đầu tiên khi load trang
updateActiveSection();

// Tạo dots điều hướng cho các section
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

// Cập nhật section đang active dựa trên vị trí cuộn
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
}

// Thêm hiệu ứng snap scroll (cuộn hút vào từng section)
function enableSnapScroll() {
    let isScrolling = false;
    let currentSection = 0;
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('wheel', function (e) {
        if (!isScrolling) {
            isScrolling = true;

            // Xác định hướng cuộn
            if (e.deltaY > 0 && currentSection < sections.length - 1) {
                currentSection++;
            } else if (e.deltaY < 0 && currentSection > 0) {
                currentSection--;
            }

            // Cuộn đến section tương ứng
            window.scrollTo({
                top: sections[currentSection].offsetTop,
                behavior: 'smooth'
            });

            // Đặt timeout để tránh cuộn liên tục
            setTimeout(() => {
                isScrolling = false;
            }, 800);
        }
        e.preventDefault();
    }, { passive: false });
}
