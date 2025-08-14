

//  // Sample product data
//         const products = [
        
//             {
//             id: 1,
//             name: "Premium Organic Dog Food",
//             description: "100% organic ingredients with sustainable packaging",
//             price: "$49.99",
//             kg: "5",
//             category: "mamuls",
//             subcategory: "dogs",
//             icon: "🐕"
//         }, {
//             id: 2,
//             name: "Eco-Friendly Cat Treats",
//             description: "Made from recycled ocean plastic packaging",
//             price: "$24.99",
//             category: "cats",
//             icon: "🐱"
//         }, {
//             id: 3,
//             name: "Sustainable Bird Food",
//             description: "Organic seeds in compostable packaging",
//             price: "$18.99",
//             category: "organic",
//             icon: "🐦"
//         }, {
//             id: 4,
//             name: "Recycled Package Dog Treats",
//             description: "Delicious treats in 100% recycled packaging",
//             price: "$32.50",
//             category: "treats",
//             icon: "🦴"
//         }, {
//             id: 5,
//             name: "Organic Cat Food",
//             description: "Natural ingredients for healthy felines",
//             price: "$39.99",
//             category: "organic",
//             icon: "🐱"
//         }, {
//             id: 6,
//             name: "Plant-Based Dog Treats",
//             description: "Vegan treats that dogs absolutely love",
//             price: "$28.75",
//             category: "treats",
//             icon: "🌱"
//         }, {
//             id: 7,
//             name: "Organic Lizard Food",
//             description: "Recycled Healthy Food for every lizard",
//         }
        
    
    
    
//     ];

        // let cart = [];
        // let filteredProducts = [...products];

        // // DOM Elements
        // const profileBtn = document.getElementById('profileBtn');
        // const profilePanel = document.getElementById('profilePanel');
        // const closeProfile = document.getElementById('closeProfile');
        // const cartBtn = document.getElementById('cartBtn');
        // const cartCount = document.getElementById('cartCount');
        // const productGrid = document.getElementById('productGrid');
        // // const categoryPills = document.querySelectorAll('.category-pill');
        // const searchInput = document.getElementById('searchInput');
        // const searchBtn = document.getElementById('searchBtn');

        // // Profile panel functionality
        // profileBtn.addEventListener('click', () => {
        //     profilePanel.classList.add('open');
        // });

        // closeProfile.addEventListener('click', () => {
        //     profilePanel.classList.remove('open');
        // });

        // // Close profile panel when clicking outside
        // document.addEventListener('click', (e) => {
        //     if (!profilePanel.contains(e.target) && !profileBtn.contains(e.target)) {
        //         profilePanel.classList.remove('open');
        //     }
        // });

        // // Category filtering
        // categoryPills.forEach(pill => {
        //     pill.addEventListener('click', () => {
        //         categoryPills.forEach(p => p.classList.remove('active'));
        //         pill.classList.add('active');

        //         const category = pill.dataset.category;
        //         if (category === 'all') {
        //             filteredProducts = [...products];
        //         } else {
        //             filteredProducts = products.filter(product => product.category === category);
        //         }
        //         renderProducts();
        //     });
        // });

        // // Search functionality
        // function performSearch() {
        //     const query = searchInput.value.toLowerCase();
        //     filteredProducts = products.filter(product =>
        //         product.name.toLowerCase().includes(query) ||
        //         product.description.toLowerCase().includes(query)
        //     );
        //     renderProducts();
        // }

        // searchBtn.addEventListener('click', performSearch);
        // searchInput.addEventListener('keypress', (e) => {
        //     if (e.key === 'Enter') {
        //         performSearch();
        //     }
        // });
    
        // // Cart functionality
        // function addToCart(productId) {
        //     const existingItem = cart.find(item => item.id === productId);
        //     if (existingItem) {
        //         existingItem.quantity += 1;
        //     } else {
        //         const product = products.find(p => p.id === productId);
        //         cart.push({...product,
        //             quantity: 1
        //         });
        //     }
        //     updateCartCount();

        //     // Visual feedback
        //     const button = event.target;
        //     const originalText = button.textContent;
        //     button.textContent = 'Added! ✓';
        //     button.style.background = '#00b572';

        //     setTimeout(() => {
        //         button.textContent = originalText;
        //         button.style.background = '#00D084';
        //     }, 1000);
        // }

        // function updateCartCount() {
        //     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        //     cartCount.textContent = totalItems;
        // }

        // // Render products
        // function renderProducts() {
        //     productGrid.innerHTML = '';
        //     filteredProducts.forEach((product, index) => {
        //         const productCard = document.createElement('div');
        //         productCard.className = 'product-card';
        //         productCard.style.animationDelay = `${index * 0.1}s`;

        //         productCard.innerHTML = `
        //             <div class="product-image">${product.icon}</div>
        //             <div class="product-info">
        //                 <h3>${product.name}</h3>
        //                 <p class="product-description">${product.description}</p>
        //                 <p class="product-weight">${product.kg}Kg</p>
        //                 <div class="product-price">${product.price}</div>
        //                 <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        //             </div>
        //         `;

        //         productGrid.appendChild(productCard);
        //     });
        // }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // // Initialize
        // renderProducts();
        // updateCartCount();

        // Add some dynamic background particles effect
        function createFloatingElements() {
            for (let i = 0; i < 20; i++) {
                const element = document.createElement('div');
                element.style.position = 'fixed';
                element.style.width = Math.random() * 10 + 5 + 'px';
                element.style.height = element.style.width;
                element.style.background = 'rgba(0, 208, 132, 0.1)';
                element.style.borderRadius = '50%';
                element.style.left = Math.random() * 100 + 'vw';
                element.style.top = Math.random() * 100 + 'vh';
                element.style.pointerEvents = 'none';
                element.style.zIndex = '-1';

                document.body.appendChild(element);

                // Animate the floating elements
                const duration = Math.random() * 10 + 10;
                element.animate([{
                    transform: 'translateY(0px)',
                    opacity: 0.3
                }, {
                    transform: 'translateY(-100vh)',
                    opacity: 0
                }], {
                    duration: duration * 1000,
                    iterations: Infinity
                });
            }
        }

        // Initialize floating elements
        createFloatingElements();









// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your web app's Firebase configuration
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
const auth = getAuth(app); // Make sure to pass the app instance

// Get the logout button
const logoutButton = document.getElementById('LogOut');

// Add logout functionality
logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful
        console.log("User signed out");
        window.location.href = '../index.html'; // Redirect to index.html
    }).catch((error) => {
        console.error("Sign out error:", error);
    });
});