import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
]

const SKILL_CATEGORIES = [
    {
        icon: 'fas fa-code',
        title: 'Frontend Development',
        items: ['HTML5 & CSS3', 'JavaScript / TypeScript', 'React.js', 'Vue.js', 'Tailwind CSS'],
    },
    {
        icon: 'fas fa-server',
        title: 'Backend Development',
        items: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Firebase'],
    },
    {
        icon: 'fas fa-paint-brush',
        title: 'UI/UX Design',
        items: ['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping', 'User Research'],
    },
    {
        icon: 'fas fa-tools',
        title: 'Tools & Others',
        items: ['Git & GitHub', 'Webpack', 'Docker', 'CI/CD', 'Agile Methodologies'],
    },
]

const PROJECTS = [
    {
        image: '/hoanhtuan.github.io/background/ecommerce.png',
        title: 'E-commerce Platform',
        description:
            'A full-featured online shopping platform with product management, cart functionality, and payment integration.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
        image: '/hoanhtuan.github.io/background/Task.png',
        title: 'Task Management App',
        description:
            'A productivity application for organizing tasks with categories, priorities, and deadline reminders.',
        tech: ['Vue.js', 'Firebase', 'Tailwind'],
    },
    {
        image: '/hoanhtuan.github.io/background/weather.png',
        title: 'Weather Dashboard',
        description:
            'Real-time weather information dashboard with location search, forecasts, and interactive maps.',
        tech: ['JavaScript', 'Weather API', 'Charts.js'],
    },
]

const EXPERIENCE = [
    {
        date: '2023 - Present',
        title: 'Frontend Developer',
        subtitle: 'Tech Solutions Inc.',
        description:
            'Developing and maintaining responsive web applications using React.js. Working closely with designers and backend developers to implement user interfaces that are both functional and visually appealing.',
    },
    {
        date: '2021 - 2023',
        title: 'UI/UX Designer',
        subtitle: 'Digital Creatives Ltd.',
        description:
            'Created user interfaces and experiences for web and mobile applications. Conducted user research and usability testing to ensure optimal user experiences.',
    },
    {
        date: '2020 - 2021',
        title: 'Web Developer Intern',
        subtitle: 'StartUp Innovations',
        description:
            'Assisted in developing website features using HTML, CSS, and JavaScript. Collaborated with senior developers to learn best practices and improve coding skills.',
    },
]

const EDUCATION = [
    {
        date: '2018 - 2022',
        title: 'Bachelor of Science in Computer Science',
        subtitle: 'University of Technology',
        description:
            'Focused on software development, web technologies, and user interface design. Graduated with honors.',
    },
    {
        date: '2023',
        title: 'UI/UX Design Certificate',
        subtitle: 'Design Academy',
        description:
            'Completed intensive training in user interface design, prototyping, and usability principles.',
    },
    {
        date: '2022',
        title: 'Frontend Development Bootcamp',
        subtitle: 'Code Institute',
        description:
            'Intensive training in modern frontend technologies including React, Vue.js, and responsive design techniques.',
    },
]

const CONTACT_ITEMS = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'tuan.ho230216@vnuk.vn.edu' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Da Nang City, Vietnam' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+84 123 456 789' },
]

const SOCIAL_LINKS = [
    { href: 'https://github.com/3hotuan3', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ho-tuan', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://twitter.com/ho_tuan', icon: 'fab fa-twitter', label: 'Twitter' },
]

const FOOTER_SOCIAL_LINKS = [
    { href: 'https://github.com/3HoTuan3', image: '/hoanhtuan.github.io/imgs/github.svg', alt: 'github' },
    { href: '#', image: '/hoanhtuan.github.io/imgs/linkedin.svg', alt: 'linkedin' },
    { href: 'https://x.com/', image: '/hoanhtuan.github.io/imgs/twitter.svg', alt: 'twitter' },
]

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId)

    if (!targetSection) {
        return
    }

    window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth',
    })
}

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 })
    const navLinksRef = useRef(null)
    const navLinkRefs = useRef({})

    useEffect(() => {
        import('../lib/scroll-reveal').then(({ default: initScrollReveal }) => {
            initScrollReveal()
        })

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3
            let nextActiveSection = NAV_ITEMS[0].id

            NAV_ITEMS.forEach(({ id }) => {
                const section = document.getElementById(id)

                if (!section) {
                    return
                }

                const sectionTop = section.offsetTop
                const sectionBottom = sectionTop + section.offsetHeight

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    nextActiveSection = id
                }
            })

            setActiveSection(nextActiveSection)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        window.addEventListener('resize', updateActiveSection)

        return () => {
            window.removeEventListener('scroll', updateActiveSection)
            window.removeEventListener('resize', updateActiveSection)
        }
    }, [])

    useEffect(() => {
        const activeLink = navLinkRefs.current[activeSection]
        const navLinksElement = navLinksRef.current

        if (!activeLink || !navLinksElement) {
            return
        }

        const linkRect = activeLink.getBoundingClientRect()
        const navLinksRect = navLinksElement.getBoundingClientRect()

        setSliderStyle({
            width: linkRect.width,
            left: linkRect.left - navLinksRect.left,
        })
    }, [activeSection])

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId)
        setMobileMenuOpen(false)
        scrollToSection(sectionId)
    }

    return (
        <>
            <Head>
                <title>Ho Anh Tuan - Web Developer</title>
                <meta name="description" content="Frontend Developer & UI Designer specializing in web applications" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700&display=swap" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </Head>

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">Ho Tuan</div>
                    <button
                        type="button"
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen((current) => !current)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul ref={navLinksRef} className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    ref={(element) => {
                                        if (element) {
                                            navLinkRefs.current[item.id] = element
                                        }
                                    }}
                                    className={activeSection === item.id ? 'active' : ''}
                                    onClick={(event) => {
                                        event.preventDefault()
                                        handleNavClick(item.id)
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <span className="slider" style={{ width: `${sliderStyle.width}px`, left: `${sliderStyle.left}px` }}></span>
                    </ul>
                </div>
            </nav>

            <main>
                <section id="home" className="banner">
                    <div className="banner-overlay"></div>
                    <div className="banner-content">
                        <h1 className="banner-title banner-text">
                            Hi, I&apos;m <span className="primary-color">Ho Anh Tuan</span>
                        </h1>
                        <h2 className="banner-subtitle banner-text">Full-Stack Developer</h2>
                        <a
                            href="#about"
                            className="btn btn-accent banner-cta"
                            onClick={(event) => {
                                event.preventDefault()
                                handleNavClick('about')
                            }}
                        >
                            Know More
                        </a>
                    </div>
                </section>

                <section id="about" className="section primary-bg">
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className="about-grid section-content">
                            <div className="about-image">
                                <img src="/hoanhtuan.github.io/imgs/yeye.jpg" alt="Ho Anh Tuan" />
                            </div>
                            <div className="about-content">
                                <p>
                                    I&apos;m a passionate Web Developer with a strong focus on creating elegant and functional user
                                    experiences. With expertise in frontend technologies and UI design, I bring creativity and
                                    technical precision to every project.
                                </p>
                                <p>
                                    I love programming, application development, and researching software architecture. My career
                                    objective is to become a Senior Software Engineer who masters software architecture, design
                                    principles, and modern development technologies.
                                </p>
                                <a href="https://www.facebook.com/hostuans" target="_blank" rel="noreferrer" className="btn btn-accent">
                                    Here my CV
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="section secondary-bg">
                    <div className="container">
                        <h2 className="section-title">My Skills</h2>
                        <div className="skills-grid section-content">
                            {SKILL_CATEGORIES.map((skill) => (
                                <div key={skill.title} className="skill-category">
                                    <i className={`${skill.icon} skill-icon`}></i>
                                    <h3>{skill.title}</h3>
                                    <ul className="skill-list">
                                        {skill.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="section light-bg">
                    <div className="container">
                        <h2 className="section-title">My Projects</h2>
                        <div className="projects-grid section-content">
                            {PROJECTS.map((project) => (
                                <div key={project.title} className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            <a href="#" target="_blank" rel="noreferrer">
                                                <i className="fas fa-external-link-alt"></i> Live Demo
                                            </a>
                                            <a href="#" target="_blank" rel="noreferrer">
                                                <i className="fab fa-github"></i> Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="experience" className="section primary-bg">
                    <div className="container">
                        <h2 className="section-title">Experience</h2>
                        <div className="timeline section-content">
                            {EXPERIENCE.map((item, index) => (
                                <div key={item.title} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                                    <div className="timeline-content">
                                        <div className="timeline-date">{item.date}</div>
                                        <h3 className="timeline-title font-bold">{item.title}</h3>
                                        <h4 className="timeline-subtitle">{item.subtitle}</h4>
                                        <p className="text-black">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="education" className="section secondary-bg">
                    <div className="container">
                        <h2 className="section-title">Education</h2>
                        <div className="timeline section-content">
                            {EDUCATION.map((item, index) => (
                                <div key={item.title} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                                    <div className="timeline-content">
                                        <div className="timeline-date">{item.date}</div>
                                        <h3 className="timeline-title font-bold">{item.title}</h3>
                                        <h4 className="timeline-subtitle">{item.subtitle}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section contact-section">
                    <div className="container">
                        <h2 className="section-title">CONTACT</h2>
                        <p className="contact-subtitle">I&apos;m always open to new opportunities and collaborations</p>

                        <div className="contact-grid section-content">
                            <div className="contact-info">
                                <div className="contact-card">
                                    <h3>Get In Touch</h3>

                                    {CONTACT_ITEMS.map((item) => (
                                        <div key={item.label} className="contact-item">
                                            <div className="contact-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="contact-details">
                                                <h4>{item.label}</h4>
                                                <p>{item.value}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="follow-section">
                                        <h4>Follow Me</h4>
                                        <div className="social-links">
                                            {SOCIAL_LINKS.map((item) => (
                                                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-link">
                                                    <i className={item.icon}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form">
                                <div className="form-card">
                                    <h3>Send Me a Message</h3>
                                    <form action="https://formspree.io/f/mexample" method="POST">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name" name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" name="message" rows="5" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-submit">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="section-nav">
                {NAV_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className={`section-nav-dot ${activeSection === item.id ? 'active' : ''}`}
                        role="button"
                        tabIndex={0}
                        title={item.label}
                        onClick={() => handleNavClick(item.id)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                handleNavClick(item.id)
                            }
                        }}
                    ></div>
                ))}
            </div>

            <footer className="bg-gray-800 text-white py-12 text-center">
                <ul className="social-links flex justify-center gap-6 mb-6">
                    {FOOTER_SOCIAL_LINKS.map((item) => (
                        <li key={item.alt} className="hover:-translate-y-1 transition-transform">
                            <a
                                href={item.href}
                                className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#e57373]"
                                target={item.href === '#' ? undefined : '_blank'}
                                rel={item.href === '#' ? undefined : 'noreferrer'}
                            >
                                <img src={item.image} alt={item.alt} className="w-6 h-6" />
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="opacity-70">© 2025 Ho Anh Tuan. All rights reserved.</p>
            </footer>
        </>
    )
}
