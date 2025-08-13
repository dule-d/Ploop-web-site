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

// Hero buttons with interactive feedback
document.getElementById('getStartedBtn').addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// document.getElementById('watchStoryBtn').addEventListener('click', function(e) {
//     e.preventDefault();
//     alert('Video story would play here! 🎬 Coming soon...');
// });

document.getElementById('finalCtaBtn').addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';    
});



// Show/hide password for login
function setupPasswordToggle(eyeIconId, inputId) {
  const icon = document.getElementById(eyeIconId);
  const input = document.getElementById(inputId);

  if (!icon || !input) return;

  icon.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    icon.src = isPassword ? "Photos/eye-open.png" : "Photos/eye-close.png";
  });
}

// Setup toggles for both inputs
setupPasswordToggle("showPasswordLogin", "loginPassword");
setupPasswordToggle("showPasswordSignup", "signupPassword");











// this is for the reset password functionality
function closeModal(modalElement) {
  const content = modalElement.querySelector('.modal-content');
  content.classList.add('closing');

  setTimeout(() => {
    modalElement.classList.remove('active');
    content.classList.remove('closing');
    document.body.style.overflow = 'auto';
  }, 300); // Match animation duration in CSS
}






// // Modal functionality
// const loginModal = document.getElementById('loginModal');
// const loginBtns = [document.getElementById('loginBtn'), document.getElementById('mobileLoginBtn')];
// const closeLogin = document.getElementById('closeLogin');



// // Open login modal
// loginBtns.forEach(btn => {
//     if (btn) {
//         btn.addEventListener('click', function(e) {
//             e.preventDefault();
//             loginModal.classList.add('active');
//             document.body.style.overflow = 'hidden';
//         });
//     }
// });

// // Close modals
// closeLogin.addEventListener('click', function() {
//     loginModal.classList.remove('active');
//     document.body.style.overflow = 'auto';
// });

// // Close modals when clicking outside
// window.addEventListener('click', function(e) {
//     if (e.target === loginModal) {
//         loginModal.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     }   
// });

// // Switch between login and signup
// document.getElementById('switchToSignup').addEventListener('click', function(e) {
//     e.preventDefault();
//     loginModal.classList.remove('active');
//     signupModal.classList.add('active');
// });

// // // Form submissions log in FAKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE LOG IN
// // document.getElementById('loginForm').addEventListener('submit', function(e) {
// //     e.preventDefault();
// //     const submitBtn = document.getElementById('loginSubmit');
// //     const successMsg = document.getElementById('loginSuccess');
    
// //     // Show loading state
// //     submitBtn.classList.add('btn-loading');
// //     submitBtn.disabled = true;
    
// //     // Simulate API call
// //     setTimeout(() => {
// //         submitBtn.classList.remove('btn-loading');
// //         submitBtn.disabled = false;
// //         successMsg.classList.add('show');
        
// //         // Hide success message and close modal after 2 seconds
// //         setTimeout(() => {
// //             successMsg.classList.remove('show');
// //             loginModal.classList.remove('active');
// //             document.body.style.overflow = 'auto';
// //             this.reset();
// //         }, 2000);
// //     }, 1500);
// // });

// document.getElementById('googleLogin').addEventListener('click', function() {
//     alert('Google login would be implemented here! 🔍');
// });

// document.getElementById('facebookLogin').addEventListener('click', function() {
//     alert('Facebook login would be implemented here! 📘');
// });

// document.getElementById('googleSignup').addEventListener('click', function() {
//     alert('Google signup would be implemented here! 🔍');
// });

// document.getElementById('facebookSignup').addEventListener('click', function() {
//     alert('Facebook signup would be implemented here! 📘');
// });





































//  ctrl + / for making everythin in a file commented out

// // Modal functionality
// const signupModal = document.getElementById('signupModal');
// const signupBtns = [document.getElementById('signupBtn'), document.getElementById('mobileSignupBtn')];
// const closeSignup = document.getElementById('closeSignup');



// // Open signup modal
// signupBtns.forEach(btn => {
//     if (btn) {
//         btn.addEventListener('click', function(e) {
//             e.preventDefault();
//             signupModal.classList.add('active');
//             document.body.style.overflow = 'hidden';
//         });
//     }
// });


// // Close modals
// closeSignup.addEventListener('click', function() {
//     signupModal.classList.remove('active');
//     document.body.style.overflow = 'auto';
// });

// // Close modals when clicking outside
// window.addEventListener('click', function(e) {
//     if (e.target === signupModal) {
//         signupModal.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     }
// });

// // Switch between login and signup
// document.getElementById('switchToLogin').addEventListener('click', function(e) {
//     e.preventDefault();
//     signupModal.classList.remove('active');
//     loginModal.classList.add('active');
// });

// // // Form submissions sing up FAKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SIGN UP
// // document.getElementById('signupForm').addEventListener('submit', function(e) {
// //     e.preventDefault();
// //     const submitBtn = document.getElementById('signupSubmit');
// //     const successMsg = document.getElementById('signupSuccess');
    
// //     // Show loading state
// //     submitBtn.classList.add('btn-loading');
// //     submitBtn.disabled = true;
    
// //     // Simulate API call
// //     setTimeout(() => {
// //         submitBtn.classList.remove('btn-loading');
// //         submitBtn.disabled = false;
// //         successMsg.classList.add('show');
        
// //         // Hide success message and close modal after 2 seconds
// //         setTimeout(() => {
// //             successMsg.classList.remove('show');
// //             signupModal.classList.remove('active');
// //             document.body.style.overflow = 'auto';
// //             this.reset();
// //         }, 2000);
// //     }, 1500);
// // });

// // Social login buttons
// document.getElementById('googleLogin').addEventListener('click', function() {
//     alert('Google login would be implemented here! 🔍');
// });

// document.getElementById('facebookLogin').addEventListener('click', function() {
//     alert('Facebook login would be implemented here! 📘');
// });

// document.getElementById('googleSignup').addEventListener('click', function() {
//     alert('Google signup would be implemented here! 🔍');
// });

// document.getElementById('facebookSignup').addEventListener('click', function() {
//     alert('Facebook signup would be implemented here! 📘');
// });

























// //fire base connection
//     // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries

//     //import password and email login
//   import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider,
//     FacebookAuthProvider,
//     onAuthStateChanged,
//     updateProfile
//   } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


//      // Your web app's Firebase configuration
//      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAxdG2gR47_uDbHjh-IorBhYrswY0WJP98",
//     authDomain: "ploop-web.firebaseapp.com",
//     projectId: "ploop-web",
//     storageBucket: "ploop-web.firebasestorage.app",
//     messagingSenderId: "524020814129",
//     appId: "1:524020814129:web:d48f31e3179cd17c792010",
//     measurementId: "G-DL3C6ZP9JT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// // after initializeApp
// createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
//   .then((userCredential) => {
//     console.log("User created:", userCredential.user.uid);
//     // e.g. redirect or show success message here
//   })
//   .catch((error) => {
//     console.error("Signup error:", error.code, error.message);
//     // e.g. display error.message to user
//   });

//   // SIGNUP FORM HANDLER
//   document.getElementById('signupForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const name = document.getElementById('signupName').value;
//     const email = document.getElementById('signupEmail').value;
//     const password = document.getElementById('signupPassword').value;
//     const submitBtn = document.getElementById('signupSubmit').valiue;
//     const successMsg = document.getElementById('signupSuccess').valiue;

//     submitBtn.classList.add('btn-loading');
//     submitBtn.disabled = true;

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(userCredential.user, { displayName: name });

//       submitBtn.classList.remove('btn-loading');
//       submitBtn.disabled = false;
//       successMsg.classList.add('show');

//       setTimeout(() => {
//         successMsg.classList.remove('show');
//         document.getElementById('signupModal').classList.remove('active');
//         document.body.style.overflow = 'auto';
//         this.reset();
//       }, 2000);
//     } catch (error) {
//       submitBtn.classList.remove('btn-loading');
//       submitBtn.disabled = false;
//       alert("❌ " + error.message);
//     }
//   });

//   // LOGIN FORM HANDLER
//   document.getElementById('loginForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;
//     const submitBtn = document.getElementById('loginSubmit');
//     const successMsg = document.getElementById('loginSuccess');

//     submitBtn.classList.add('btn-loading');
//     submitBtn.disabled = true;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);

//       submitBtn.classList.remove('btn-loading');
//       submitBtn.disabled = false;
//       successMsg.classList.add('show');

//       setTimeout(() => {
//         successMsg.classList.remove('show');
//         document.getElementById('loginModal').classList.remove('active');
//         document.body.style.overflow = 'auto';
//         this.reset();
//       }, 2000);
//     } catch (error) {
//       submitBtn.classList.remove('btn-loading');
//       submitBtn.disabled = false;
//       alert("❌ " + error.message);
//     }
//   });

//   // Monitor user state
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("✅ Logged in:", user.email);
//     } else {
//       console.log("🚪 Logged out");
//     }
//   });
