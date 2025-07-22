







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
// document.getElementById('googleSignup').addEventListener('click', function() {
//     alert('Google signup would be implemented here! 🔍');
// });

// document.getElementById('facebookSignup').addEventListener('click', function() {
//     alert('Facebook signup would be implemented here! 📘');
// });







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
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

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

//Google Sign-Up Handler
document.getElementById('googleSignup').addEventListener('click', async function (e) {
    e.preventDefault();
    
    const googleBtn = document.getElementById('googleSignup');
    const successMsg = document.getElementById('signupSuccess');
    
    // Add loading state to Google button
    const originalText = googleBtn.innerHTML;
    googleBtn.innerHTML = '<span>⏳</span> Signing up with Google...';
    googleBtn.disabled = true;
    
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        
        console.log("Google signup successful:", user.uid);
        console.log("User info:", {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        });
        
        // Show success message
        successMsg.textContent = `Welcome ${user.displayName}! Account created successfully! 🎉`;
        successMsg.classList.add('show');
        
        // Reset button
        googleBtn.innerHTML = originalText;
        googleBtn.disabled = false;
        
        setTimeout(() => {
            successMsg.classList.remove('show');
            document.getElementById('signupModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            window.location.href = "test.html";
        }, 1000);
        
    } catch (error) {
        // Reset button on error
        googleBtn.innerHTML = originalText;
        googleBtn.disabled = false;
        
        console.error("Google signup error:", error.code, error.message);
        
        // Handle specific error cases
        if (error.code === 'auth/popup-closed-by-user') {
            alert("❌ Sign-up cancelled. Please try again.");
        } else if (error.code === 'auth/popup-blocked') {
            alert("❌ Popup blocked by browser. Please allow popups and try again.");
        } else if (error.code === 'auth/account-exists-with-different-credential') {
            alert("❌ An account already exists with this email using a different sign-in method.");
        } else {
            alert("❌ Google sign-up failed: " + error.message);
        }
    }
});

// FACEBOOK SIGN-UP HANDLER
document.getElementById('facebookSignup').addEventListener('click', async function (e) {
    e.preventDefault();
    
    const facebookBtn = document.getElementById('facebookSignup');
    const successMsg = document.getElementById('signupSuccess');
    
    // Add loading state to Facebook button
    const originalText = facebookBtn.innerHTML;
    facebookBtn.innerHTML = '<span>⏳</span> Signing up with Facebook...';
    facebookBtn.disabled = true;
    
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        const user = result.user;
        
        console.log("Facebook signup successful:", user.uid);
        console.log("User info:", {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        });
        
        // Show success message
        successMsg.textContent = `Welcome ${user.displayName}! Account created successfully! 🎉`;
        successMsg.classList.add('show');
        
        // Reset button
        facebookBtn.innerHTML = originalText;
        facebookBtn.disabled = false;
        
        setTimeout(() => {
            successMsg.classList.remove('show');
            document.getElementById('signupModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            window.location.href = "test.html";
        }, 1000);
        
    } catch (error) {
        // Reset button on error
        facebookBtn.innerHTML = originalText;
        facebookBtn.disabled = false;
        
        console.error("Facebook signup error:", error.code, error.message);
        
        // Handle specific error cases
        if (error.code === 'auth/popup-closed-by-user') {
            alert("❌ Sign-up cancelled. Please try again.");
        } else if (error.code === 'auth/popup-blocked') {
            alert("❌ Popup blocked by browser. Please allow popups and try again.");
        } else if (error.code === 'auth/account-exists-with-different-credential') {
            alert("❌ An account already exists with this email using a different sign-in method.");
        } else if (error.code === 'auth/auth-domain-config-required') {
            alert("❌ Facebook login is not properly configured. Please contact support.");
        } else if (error.code === 'auth/operation-not-allowed') {
            alert("❌ Facebook sign-up is not enabled. Please contact support.");
        } else if (error.code === 'auth/user-disabled') {
            alert("❌ This account has been disabled. Please contact support.");
        } else {
            alert("❌ Facebook sign-up failed: " + error.message);
        }
    }
});