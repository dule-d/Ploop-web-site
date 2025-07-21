





// Modal functionality
const loginModal = document.getElementById('loginModal');
const loginBtns = [document.getElementById('loginBtn'), document.getElementById('mobileLoginBtn')];
const closeLogin = document.getElementById('closeLogin');



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

// Close modals
closeLogin.addEventListener('click', function() {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }   
});

// Switch between login and signup
document.getElementById('switchToSignup').addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.remove('active');
    signupModal.classList.add('active');
});

// // Form submissions log in FAKE API CALL
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const submitBtn = document.getElementById('loginSubmit');
//     const successMsg = document.getElementById('loginSuccess');
    
//     // Show loading state
//     submitBtn.classList.add('btn-loading');
//     submitBtn.disabled = true;
    
//     // Simulate API call
//     setTimeout(() => {
//         submitBtn.classList.remove('btn-loading');
//         submitBtn.disabled = false;
//         successMsg.classList.add('show');
        
//         // Hide success message and close modal after 2 seconds
//         setTimeout(() => {
//             successMsg.classList.remove('show');
//             loginModal.classList.remove('active');
//             document.body.style.overflow = 'auto';
//             this.reset();
//         }, 2000);
//     }, 1500);
// });


// Social sign up buttons
document.getElementById('googleLogin').addEventListener('click', function() {
    alert('Google login would be implemented here! 🔍');
});

document.getElementById('facebookLogin').addEventListener('click', function() {
    alert('Facebook login would be implemented here! 📘');
});








//fire base connection
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import password and email login
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxdG2gR47_uDbHjh-IorBhYrswY0WJP98",
    authDomain: "ploop-web.firebaseapp.com",
    projectId: "ploop-web",
    storageBucket: "ploop-web.firebasestorage.app",
    messagingSenderId: "524020814129",
    appId: "1:524020814129:web:d48f31e3179cd17c792010",
    measurementId: "G-DL3C6ZP9JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// LOGIN FORM HANDLER
document.getElementById('loginForm').addEventListener('submit', async function (e) {
e.preventDefault();

const email = document.getElementById('loginEmail').value;
const password = document.getElementById('loginPassword').value;
const submitBtn = document.getElementById('loginSubmit');
const successMsg = document.getElementById('loginSuccess');

submitBtn.classList.add('btn-loading');
submitBtn.disabled = true;

try {
    await signInWithEmailAndPassword(auth, email, password);

    submitBtn.classList.remove('btn-loading');
    submitBtn.disabled = false;
    successMsg.classList.add('show');

    setTimeout(() => {
    successMsg.classList.remove('show');
    document.getElementById('loginModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    this.reset();
    window.location.href = "test.html";
    }, 
    1000);
    } catch (error) {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
        alert("❌ " + error.message);
    }
    });

    // Monitor user state
    onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("✅ Logged in:", user.email);
    } else {
        console.log("🚪 Logged out");
    }
});















