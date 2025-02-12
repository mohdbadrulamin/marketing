document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Smooth scroll
    window.scrollToSignup = function() {
        document.getElementById('signup').scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    // Form handling
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = 'https://robinhood.com/signup?affiliate=verbital';
    });
});
