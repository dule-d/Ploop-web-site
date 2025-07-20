// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let mobileMenuOpen = false;

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
        mobileMenu.classList.add('active');
        mobileMenuBtn.textContent = '✕';
    } else {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
        mobileMenuOpen = false;
    });
});

// Feature cards interactive hover effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Process steps click interaction
document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('click', function() {
        const stepNumber = Array.from(this.parentNode.children).indexOf(this) + 1;
        alert(`Step ${stepNumber}: ${this.querySelector('h3').textContent}\n\n${this.querySelector('p').textContent}`);
    });
});



// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (loginModal.classList.contains('active')) {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (signupModal.classList.contains('active')) {
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
            mobileMenuOpen = false;
        }
    }
});





// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add scroll transition to header
document.querySelector('header').style.transition = 'transform 0.3s ease';






// Modal functionality
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtns = [document.getElementById('loginBtn'), document.getElementById('mobileLoginBtn')];
const signupBtns = [document.getElementById('signupBtn'), document.getElementById('mobileSignupBtn')];
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');




// Open login modal
loginBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
});



// Open signup modal
signupBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
});

// Close modals
closeLogin.addEventListener('click', function() {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

closeSignup.addEventListener('click', function() {
    signupModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Switch between login and signup
document.getElementById('switchToSignup').addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.remove('active');
    signupModal.classList.add('active');
});

document.getElementById('switchToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.remove('active');
    loginModal.classList.add('active');
});

// Form submissions
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('loginSubmit');
    const successMsg = document.getElementById('loginSuccess');
    
    // Show loading state
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
        successMsg.classList.add('show');
        
        // Hide success message and close modal after 2 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            this.reset();
        }, 2000);
    }, 1500);
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('signupSubmit');
    const successMsg = document.getElementById('signupSuccess');
    
    // Show loading state
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
        successMsg.classList.add('show');
        
        // Hide success message and close modal after 2 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            this.reset();
        }, 2000);
    }, 1500);
});

// Social login buttons
document.getElementById('googleLogin').addEventListener('click', function() {
    alert('Google login would be implemented here! 🔍');
});

document.getElementById('facebookLogin').addEventListener('click', function() {
    alert('Facebook login would be implemented here! 📘');
});

document.getElementById('googleSignup').addEventListener('click', function() {
    alert('Google signup would be implemented here! 🔍');
});

document.getElementById('facebookSignup').addEventListener('click', function() {
    alert('Facebook signup would be implemented here! 📘');
});





// Hero buttons with interactive feedback
document.getElementById('getStartedBtn').addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.getElementById('watchStoryBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Video story would play here! 🎬 Coming soon...');
});

document.getElementById('finalCtaBtn').addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';    
});




//finalCtaBtn