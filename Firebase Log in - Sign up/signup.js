







// Modal functionality
const signupModal = document.getElementById('signupModal');
const signupBtns = [document.getElementById('signupBtn'), document.getElementById('mobileSignupBtn')];
const closeSignup = document.getElementById('closeSignup');

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
closeSignup.addEventListener('click', function() {
    signupModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Switch between login and signup
document.getElementById('switchToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.remove('active');
    loginModal.classList.add('active');
});

// // Form submissions sing up FAKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SIGN UP
// document.getElementById('signupForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const submitBtn = document.getElementById('signupSubmit');
//     const successMsg = document.getElementById('signupSuccess');
    
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
//             signupModal.classList.remove('active');
//             document.body.style.overflow = 'auto';
//             this.reset();
//         }, 2000);
//     }, 1500);
// });

// Social sign up buttons
document.getElementById('googleSignup').addEventListener('click', function() {
    alert('Google signup would be implemented here! 🔍');
});

document.getElementById('facebookSignup').addEventListener('click', function() {
    alert('Facebook signup would be implemented here! 📘');
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

// SIGNUP FORM HANDLER
document.getElementById('signupForm').addEventListener('submit', async function (e) {
e.preventDefault();

const name = document.getElementById('signupName').value;
const email = document.getElementById('signupEmail').value;
const password = document.getElementById('signupPassword').value;
const submitBtn = document.getElementById('signupSubmit');
const successMsg = document.getElementById('signupSuccess');

submitBtn.classList.add('btn-loading');
submitBtn.disabled = true;

try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });

    console.log("User created:", userCredential.user.uid);

    submitBtn.classList.remove('btn-loading');
    submitBtn.disabled = false;
    successMsg.classList.add('show');

    setTimeout(() => {
        successMsg.classList.remove('show');
        document.getElementById('signupModal').classList.remove('active');
        document.body.style.overflow = 'auto';
        document.getElementById('signupForm').reset();
        window.location.href = "test.html";
    }, 
    1000);
    } catch (error) {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
        console.error("Signup error:", error.code, error.message);
        alert("❌ " + error.message);
    }
});