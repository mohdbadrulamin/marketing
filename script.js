document.addEventListener('DOMContentLoaded', () => {
    // Initialize time tracking
    const startTime = new Date();
    let lastActivityTime = startTime;

    // Track time spent
    setInterval(() => {
        const currentTime = new Date();
        const timeSpent = Math.round((currentTime - startTime) / 1000);
        gtag('event', 'time_spent', {
            'event_category': 'engagement',
            'value': timeSpent
        });
    }, 30000);  // Send updates every 30 seconds

    // Track user activity
    document.addEventListener('mousemove', () => {
        lastActivityTime = new Date();
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Track CTA button clicks
    document.querySelector('.cta-button').addEventListener('click', () => {
        gtag('event', 'click', {
            'event_category': 'engagement',
            'event_label': 'get_started_button'
        });
    });

    // Enhanced form submission tracking
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        gtag('event', 'sign_up', {
            'event_category': 'conversion',
            'event_label': 'email_signup',
            'user_type': 'new',
            'timestamp': new Date().toISOString()
        });

        // Track form completion time
        const formCompletionTime = Math.round((new Date() - lastActivityTime) / 1000);
        gtag('event', 'form_completion_time', {
            'event_category': 'performance',
            'value': formCompletionTime
        });

        alert('Thanks for signing up! We\'ll be in touch soon.');
        form.reset();
    });

    // Add animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                gtag('event', 'section_view', {
                    'event_category': 'engagement',
                    'event_label': entry.target.closest('section')?.className || 'unknown'
                });
            }
        });
    });

    document.querySelectorAll('.money-card, .benefit-card').forEach((el) => {
        observer.observe(el);
    });

    // Track all interactive elements
    document.querySelectorAll('button, a, input').forEach(element => {
        element.addEventListener('click', (e) => {
            gtag('event', 'interaction', {
                'event_category': 'engagement',
                'event_label': `${element.tagName.toLowerCase()}_${element.className || 'no-class'}`,
                'element_text': element.textContent || element.value || 'no-text'
            });
        });
    });

    // Monitor rage clicks
    let clicks = [];
    document.addEventListener('click', (e) => {
        const now = Date.now();
        clicks = clicks.filter(time => now - time < 1000);
        clicks.push(now);
        
        if (clicks.length >= 3) {
            gtag('event', 'rage_click', {
                'event_category': 'user_frustration',
                'event_label': e.target.tagName,
                'click_count': clicks.length
            });
        }
    });

    // Track initial page load
    gtag('event', 'page_load', {
        'event_category': 'performance',
        'event_label': window.location.pathname,
        'timing': window.performance.timing.loadEventEnd - window.performance.timing.navigationStart
    });
});
