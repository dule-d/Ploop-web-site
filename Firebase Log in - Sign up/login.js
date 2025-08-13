



const nextpage = "Pages/Store.html"





// Modal functionality
const loginModal = document.getElementById('loginModal');
const loginBtns = [document.getElementById('loginBtn'), document.getElementById('mobileLoginBtn')];
const closeLogin = document.getElementById('closeLogin');

const resetPassLink = document.getElementById('resetPass');
const resetModal = document.getElementById('resetModal');
const closeResetBtn = document.getElementById('closeReset');
const backToLoginLink = document.getElementById('backToLogin');



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



// // ✅ Open the modal correctly
// document.getElementById("resetPass").addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("resetModal").classList.add("active"); // ✅ not style.display!
// });

// // ✅ Close modal
// document.getElementById("closeReset").addEventListener("click", () => {
//   document.getElementById("resetModal").classList.remove("active");
// });

// // Optional: Close when clicking outside the modal content for reset pass
// window.addEventListener("click", (e) => {
//   if (e.target === resetModal) {
//     resetModal.style.display = "none";
//   }
// });
// document.getElementById("backToLogin").addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("resetModal").classList.remove("active");
//   document.getElementById("loginModal").classList.add("active");
// });

// ✅ Open reset modal
resetPassLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    resetModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// ✅ Close reset modal (X button)
closeResetBtn.addEventListener('click', () => {
    resetModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// ✅ Close reset modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === resetModal) {
        resetModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ✅ Back to login modal
backToLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    resetModal.classList.remove('active');
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
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


// // Social sign up buttons
// document.getElementById('googleLogin').addEventListener('click', function() {
//     alert('Google login would be implemented here! 🔍');
// });

// document.getElementById('facebookLogin').addEventListener('click', function() {
//     alert('Facebook login would be implemented here! 📘');
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
    updateProfile,
    sendPasswordResetEmail,
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
const googleProvider = new GoogleAuthProvider(app);
const facebookProvider = new FacebookAuthProvider();


// LOGIN FORM HANDLER
document.getElementById('loginForm').addEventListener('submit', async function(e) {
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
        window.location.href = nextpage;
    } else {
        console.log("🚪 Logged out");
    }
});


// //Google Sign-Up Handler
// document.getElementById('googleSignup').addEventListener('click', async function (e) {
//     e.preventDefault();

//     const googleBtn = document.getElementById('googleSignup');
//     const successMsg = document.getElementById('signupSuccess');

//     // Add loading state to Google button
//     const originalText = googleBtn.innerHTML;
//     googleBtn.innerHTML = '<span>⏳</span> Signing up with Google...';
//     googleBtn.disabled = true;

//     try {
//         const result = await signInWithPopup(auth, googleProvider);
//         const user = result.user;

//         console.log("Google signup successful:", user.uid);
//         console.log("User info:", {
//             name: user.displayName,
//             email: user.email,
//             photoURL: user.photoURL
//         });

//         // Show success message
//         successMsg.textContent = `Welcome ${user.displayName}! Account created successfully! 🎉`;
//         successMsg.classList.add('show');

//         // Reset button
//         googleBtn.innerHTML = originalText;
//         googleBtn.disabled = false;

//         setTimeout(() => {
//             successMsg.classList.remove('show');
//             document.getElementById('signupModal').classList.remove('active');
//             document.body.style.overflow = 'auto';
//             window.location.href = "test.html";
//         }, 1000);

//     } catch (error) {
//         // Reset button on error
//         googleBtn.innerHTML = originalText;
//         googleBtn.disabled = false;

//         console.error("Google signup error:", error.code, error.message);

//         // Handle specific error cases
//         if (error.code === 'auth/popup-closed-by-user') {
//             alert("❌ Sign-up cancelled. Please try again.");
//         } else if (error.code === 'auth/popup-blocked') {
//             alert("❌ Popup blocked by browser. Please allow popups and try again.");
//         } else if (error.code === 'auth/account-exists-with-different-credential') {
//             alert("❌ An account already exists with this email using a different sign-in method.");
//         } else {
//             alert("❌ Google sign-up failed: " + error.message);
//         }
//     }
// });

// Google Sign-In Handler for Login
document.getElementById('googleLogin').addEventListener('click', async function(e) {
    e.preventDefault();

    const googleBtn = document.getElementById('googleLogin');
    const successMsg = document.getElementById('loginSuccess'); // Assuming you have a success message for login

    // Add loading state to Google button
    const originalText = googleBtn.innerHTML;
    googleBtn.innerHTML = '<span>⏳</span> Signing in with Google...';
    googleBtn.disabled = true;

    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        console.log("Google signin successful:", user.uid);
        console.log("User info:", {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            lastSignInTime: user.metadata.lastSignInTime
        });

        // Check if this is a new user or returning user
        // prettier-ignore
        const isNewUser = result._tokenResponse ?.isNewUser || false;

        // Show appropriate success message
        if (successMsg) {
            if (isNewUser) {
                successMsg.textContent = `Welcome to Ploop, ${user.displayName}! Account created successfully! 🎉`;
            } else {
                successMsg.textContent = `Welcome back, ${user.displayName}! 👋`;
            }
            successMsg.classList.add('show');
        }

        // Reset button
        googleBtn.innerHTML = originalText;
        googleBtn.disabled = false;

        setTimeout(() => {
            if (successMsg) {
                successMsg.classList.remove('show');
            }
            document.getElementById('loginModal').classList.remove('active'); // Assuming your login modal has id 'loginModal'
            document.body.style.overflow = 'auto';
            window.location.href = nextpage;
        }, 1000);

    } catch (error) {
        // Reset button on error
        googleBtn.innerHTML = originalText;
        googleBtn.disabled = false;

        console.error("Google signin error:", error.code, error.message);

        // Handle specific error cases
        if (error.code === 'auth/popup-closed-by-user') {
            alert("❌ Sign-in cancelled. Please try again.");
        } else if (error.code === 'auth/popup-blocked') {
            alert("❌ Popup blocked by browser. Please allow popups and try again.");
        } else if (error.code === 'auth/user-disabled') {
            alert("❌ This account has been disabled. Please contact support.");
        } else if (error.code === 'auth/operation-not-allowed') {
            alert("❌ Google sign-in is not enabled. Please contact support.");
        } else {
            alert("❌ Google sign-in failed: " + error.message);
        }
    }
});



// FACEBOOK SIGN-IN HANDLER (for login modal)
document.getElementById('facebookLogin').addEventListener('click', async function(e) {
    e.preventDefault();

    const facebookBtn = document.getElementById('facebookLogin');
    const successMsg = document.getElementById('loginSuccess'); // Assuming you have this in your login modal

    // Add loading state to Facebook button
    const originalText = facebookBtn.innerHTML;
    facebookBtn.innerHTML = '<span>⏳</span> Signing in with Facebook...';
    facebookBtn.disabled = true;

    try {
        const result = await signInWithPopup(auth, facebookProvider);
        const user = result.user;

        console.log("Facebook signin successful:", user.uid);
        console.log("User info:", {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            lastSignInTime: user.metadata.lastSignInTime
        });

        // Check if this is a new user or returning user
        const isNewUser = result._tokenResponse ?.isNewUser || false;

        // Show appropriate success message
        if (successMsg) {
            if (isNewUser) {
                successMsg.textContent = `Welcome to Ploop, ${user.displayName}! Account created successfully! 🎉`;
            } else {
                successMsg.textContent = `Welcome back, ${user.displayName}! 👋`;
            }
            successMsg.classList.add('show');
        }

        // Reset button
        facebookBtn.innerHTML = originalText;
        facebookBtn.disabled = false;

        setTimeout(() => {
            if (successMsg) {
                successMsg.classList.remove('show');
            }
            document.getElementById('loginModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            window.location.href = nextpage;
        }, 1000);

    } catch (error) {
        // Reset button on error
        facebookBtn.innerHTML = originalText;
        facebookBtn.disabled = false;

        console.error("Facebook signin error:", error.code, error.message);

        // Handle specific error cases
        if (error.code === 'auth/popup-closed-by-user') {
            alert("❌ Sign-in cancelled. Please try again.");
        } else if (error.code === 'auth/popup-blocked') {
            alert("❌ Popup blocked by browser. Please allow popups and try again.");
        } else if (error.code === 'auth/account-exists-with-different-credential') {
            alert("❌ An account already exists with this email using a different sign-in method.");
        } else if (error.code === 'auth/user-disabled') {
            alert("❌ This account has been disabled. Please contact support.");
        } else if (error.code === 'auth/operation-not-allowed') {
            alert("❌ Facebook sign-in is not enabled. Please contact support.");
        } else {
            alert("❌ Facebook sign-in failed: " + error.message);
        }
    }
});
// // Reset password functionality
// const email = document.getElementById("resetEmail").value;
// const successMsgReset = document.getElementById('resetpassMessage');
// const resetBtn = document.getElementById("resetBtn");
// const resetEmailInput = document.getElementById("resetEmail");
// const resetModal = document.getElementById("resetModal");
// const backToLoginLink = document.getElementById("backToLogin");
// resetBtn.addEventListener("click", () => {

// console.log("Clicked. Email:", email);


// if (!email) {
//     resetMessage.textContent = "Please enter your email.";
//     resetMessage.style.color = "orange";
//     return;
// }

// sendPasswordResetEmail(auth, email)
// .then(() => {
//     console.log("Password reset email sent!");
//     successMsgReset.classList.add('show');
//     successMsgReset.style.color = "#0CAF78";
// })
// .catch((error) => {
//     console.error("Password reset error:", error);
//     resetMessage.textContent = "Error: " + error.message;
//     resetMessage.style.color = "red";
// });
// });
const resetMessagepass = document.getElementById("resetpasseMessage");
const email = document.getElementById("resetEmail").value;
const resetBtn = document.getElementById("resetBtn");


resetBtn.addEventListener("click", () => {
    const email = document.getElementById("resetEmail").value.trim();
    console.log("Clicked. Email:", email);

    if (!email) {
        resetMessagepass.textContent = "Please enter your email.";
        resetMessagepass.style.color = "orange";
        resetMessagepass.classList.add("show");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            resetMessagepass.textContent = "Reset email sent successfully!";
            resetMessagepass.style.color = "#0CAF78";
            resetMessagepass.classList.add("show");
        })
        .catch((error) => {
            console.error("Password reset error:", error);
            let msg = "Something went wrong.";
            if (error.code === "auth/user-not-found") {
                msg = "No user found with that email.";
            } else if (error.code === "auth/invalid-email") {
                msg = "Invalid email address.";
            }
            resetMessagepass.textContent = msg;
            resetMessagepass.style.color = "red";
            resetMessagepass.classList.add("show");
        });
});



// resetBtn.addEventListener("click", () => {     
// console.log("Clicked. Email:", email);


// resetMessagepass.textContent = "Reset email sent successfully!"; // Add your message
// resetMessagepass.classList.add("show");

// });