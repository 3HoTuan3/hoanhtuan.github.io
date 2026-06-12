import ScrollReveal from 'scrollreveal'

export default function initScrollReveal(defaultProps = null) {
    const targetElements = [
        {
            element: ".banner-text",
            animation: {
                delay: 700,
                origin: window.innerWidth > 768 ? "left" : "bottom",
            },
        },
        {
            element: ".banner-cta",
            animation: {
                delay: 1000,
                origin: window.innerWidth > 768 ? "left" : "bottom",
            },
        },
        {
            element: ".section-title",
            animation: {
                delay: 300,
                distance: "0px",
                origin: "bottom",
            },
        },
        {
            element: ".section-content",
            animation: {
                delay: 500,
                distance: "0px",
                origin: "bottom",
            },
        },
        // Add these elements to your existing initScrollReveal function
        {
            element: ".contact-subtitle",
            animation: {
                delay: 300,
                distance: "0px",
                origin: "bottom",
            },
        },
        {
            element: ".contact-card",
            animation: {
                delay: 400,
                distance: "50px",
                origin: "left",
            },
        },
        {
            element: ".form-card",
            animation: {
                delay: 400,
                distance: "50px",
                origin: "right",
            },
        },
        {
            element: ".contact-item",
            animation: {
                delay: 500,
                distance: "30px",
                origin: "bottom",
                interval: 200
            },
        },
        {
            element: ".social-link",
            animation: {
                delay: 800,
                scale: 0.5,
                distance: "0px",
                interval: 100
            },
        }
    ];

    ScrollReveal({ reset: false });

    targetElements.forEach(({ element, animation }) => {
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}
