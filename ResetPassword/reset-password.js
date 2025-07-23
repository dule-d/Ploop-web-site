import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, confirmPasswordReset } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxdG2gR47_uDbHjh-IorBhYrswY0WJP98",
  authDomain: "ploop-web.firebaseapp.com",
  projectId: "ploop-web",
  storageBucket: "ploop-web.firebasestorage.app",
  messagingSenderId: "524020814129",
  appId: "1:524020814129:web:d48f31e3179cd17c792010",
  measurementId: "G-DL3C6ZP9JT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get("oobCode");



document.getElementById("resetPasswordBtn").addEventListener("click", () => {
  const newPassword = document.getElementById("newPassword").value;
  const message = document.getElementById("message");

  if (!newPassword || newPassword.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  confirmPasswordReset(auth, oobCode, newPassword)
    .then(() => {
      message.textContent = "Password has been reset successfully!";
      message.style.color = "green";
    })
    .catch((error) => {
      console.error("Reset error:", error);
      message.textContent = "Error: " + error.message;
      message.style.color = "red";
    });
});

const passwordInput = document.getElementById("newPassword");
const toggleIcon = document.getElementById("showPasswordLogin");

toggleIcon.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleIcon.src = isPassword ? "../Photos/eye-open.png" : "../Photos/eye-close.png";
});