//  // Sample product data
//         const products = [
        
//             {
//             id: 1,
//             name: "Premium Organic Dog Food",
//             description: "100% organic ingredients with sustainable packaging",
//             price: "$49.99",
//             kg: "5",
//             mainCategory: "mammals",
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

//     let cart = [];
//     let filteredProducts = [...products];
//     let currentMainCategory = "all";
//     let currentSubcategory = "all";

//     const categoryPills = document.querySelectorAll('.category-pill');

//     const subcategoryFilter = document.getElementById('subcategoryFilter');
//     const subcategorySelect = document.getElementById('subcategorySelect');


//     // DOM Elements
//     const profileBtn = document.getElementById('profileBtn');
//     const profilePanel = document.getElementById('profilePanel');
//     const closeProfile = document.getElementById('closeProfile');
//     const cartBtn = document.getElementById('cartBtn');
//     const cartCount = document.getElementById('cartCount');
//     const productGrid = document.getElementById('productGrid');
//     const searchInput = document.getElementById('searchInput');
//     const searchBtn = document.getElementById('searchBtn');
    

//     // Profile panel functionality
//     profileBtn.addEventListener('click', () => {
//         profilePanel.classList.add('open');
//     });

//     closeProfile.addEventListener('click', () => {
//         profilePanel.classList.remove('open');
//     });

//     // Close profile panel when clicking outside
//     document.addEventListener('click', (e) => {
//         if (!profilePanel.contains(e.target) && !profileBtn.contains(e.target)) {
//             profilePanel.classList.remove('open');
//         }
//     });

//     //     // Category filtering
//     // categoryPills.forEach(pill => {
//     //     pill.addEventListener('click', () => {
//     //         categoryPills.forEach(p => p.classList.remove('active'));
//     //         pill.classList.add('active');

//     //         const category = pill.dataset.category;
//     //         if (category === 'all') {
//     //             filteredProducts = [...products];
//     //         } else {
//     //             filteredProducts = products.filter(product => product.category === category);
//     //         }
//     //         renderProducts();
//     //     });
//     // });

//     // Category filtering with hierarchy
//     categoryPills.forEach(pill => {
//         pill.addEventListener('click', () => {
//             categoryPills.forEach(p => p.classList.remove('active'));
//             pill.classList.add('active');
            
//             currentMainCategory = pill.dataset.mainCategory;
//             currentSubcategory = "all";
            
//             if (currentMainCategory === 'all') {
//                 filteredProducts = [...products];
//                 subcategoryFilter.style.display = 'none';
//             } else {
//                 filteredProducts = products.filter(
//                     product => product.mainCategory === currentMainCategory
//                 );
//                 populateSubcategories(currentMainCategory);
//                 subcategoryFilter.style.display = 'block';
//             }
            
//             renderProducts();
//         });
//     });

//         // Subcategory filtering
//     subcategorySelect.addEventListener('change', () => {
//         currentSubcategory = subcategorySelect.value;
        
//         if (currentMainCategory === 'all') {
//             filteredProducts = [...products];
//         } else {
//             filteredProducts = products.filter(product => 
//                 product.mainCategory === currentMainCategory
//             );
//         }
        
//         if (currentSubcategory !== 'all') {
//             filteredProducts = filteredProducts.filter(
//                 product => product.subcategory === currentSubcategory
//             );
//         }
        
//         renderProducts();
//     });
//         // Enhanced search functionality
//     function performSearch() {
//         const query = searchInput.value.toLowerCase().trim();
        
//         if (!query) {
//             // If search is empty, show current category filter
//             if (currentMainCategory === 'all') {
//                 filteredProducts = [...products];
//             } else {
//                 filteredProducts = products.filter(
//                     product => product.mainCategory === currentMainCategory
//                 );
                
//                 if (currentSubcategory !== 'all') {
//                     filteredProducts = filteredProducts.filter(
//                         product => product.subcategory === currentSubcategory
//                     );
//                 }
//             }
//         } else {
//             // Perform search across multiple fields
//             filteredProducts = products.filter(product =>
//                 product.name.toLowerCase().includes(query) ||
//                 product.description.toLowerCase().includes(query) ||
//                 product.mainCategory.toLowerCase().includes(query) ||
//                 product.subcategory.toLowerCase().includes(query) ||
//                 (product.tags && product.tags.some(tag => 
//                     tag.toLowerCase().includes(query))
//             ));
//         }
        
//         renderProducts();
//     }


//     // // Render products
//     // function renderProducts() {
//     //     productGrid.innerHTML = '';
//     //     filteredProducts.forEach((product, index) => {
//     //         const productCard = document.createElement('div');
//     //         productCard.className = 'product-card';
//     //         productCard.style.animationDelay = `${index * 0.1}s`;

//     //         productCard.innerHTML = `
//     //             <div class="product-image">${product.icon}</div>
//     //             <div class="product-info">
//     //                 <h3>${product.name}</h3>
//     //                 <p class="product-description">${product.description}</p>
//     //                 <p class="product-weight">${product.kg}Kg</p>
//     //                 <div class="product-price">${product.price}</div>
//     //                 <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
//     //             </div>
//     //         `;

//     //         productGrid.appendChild(productCard);
//     //     });
//     // }
//     // Update renderProducts to show category info
//     function renderProducts() {
//         productGrid.innerHTML = '';
        
//         if (filteredProducts.length === 0) {
//             productGrid.innerHTML = '<p class="no-results">No products found. Try a different search or filter.</p>';
//             return;
//         }
        
//         filteredProducts.forEach((product, index) => {
//             const productCard = document.createElement('div');
//             productCard.className = 'product-card';
//             productCard.style.animationDelay = `${index * 0.1}s`;

//             productCard.innerHTML = `
//                 <div class="product-image">${product.icon}</div>
//                 <div class="product-info">
//                     <div class="category-tag">${product.subcategory}</div>
//                     <h3>${product.name}</h3>
//                     <p class="product-description">${product.description}</p>
//                     ${product.kg ? `<p class="product-weight">${product.kg}Kg</p>` : ''}
//                     <div class="product-price">${product.price}</div>
//                     <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
//                 </div>
//             `;

//             productGrid.appendChild(productCard);
//         });
//     }


//             // Search functionality
//         function performSearch() {
//             const query = searchInput.value.toLowerCase();
//             filteredProducts = products.filter(product =>
//                 product.name.toLowerCase().includes(query) ||
//                 product.description.toLowerCase().includes(query)
//             );
//             renderProducts();
//         }

//         searchBtn.addEventListener('click', performSearch);
//         searchInput.addEventListener('keypress', (e) => {
//             if (e.key === 'Enter') {
//                 performSearch();
//             }
//         });
    
//         // Cart functionality
//         function addToCart(productId) {
//             const existingItem = cart.find(item => item.id === productId);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 const product = products.find(p => p.id === productId);
//                 cart.push({...product,
//                     quantity: 1
//                 });
//             }
//             updateCartCount();

//         // Visual feedback
//         const button = event.target;
//         const originalText = button.textContent;
//         button.textContent = 'Added! ✓';
//         button.style.background = '#00b572';

//         setTimeout(() => {
//             button.textContent = originalText;
//             button.style.background = '#00D084';
//         }, 1000);
//         }

//         function updateCartCount() {
//             const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//             cartCount.textContent = totalItems;
//         }














//         // Initialize
// renderProducts();
// updateCartCount();






        // Enhanced product data with hierarchical categories
        const products = [
            {
                id: 1,
                name: "Premium Organic Dog Food",
                description: "100% organic ingredients with sustainable packaging. Perfect for all dog breeds.",
                price: "$49.99",
                kg: "5",
                mainCategory: "mammals",
                subcategory: "dogs",
                icon: "🐕",
                tags: ["organic", "dog", "food", "sustainable"]
            },
            {
                id: 2,
                name: "Eco-Friendly Cat Treats",
                description: "Made from recycled ocean plastic packaging. Your cat will love these tasty snacks!",
                price: "$24.99",
                kg: "0.5",
                mainCategory: "mammals",
                subcategory: "cats",
                icon: "🐱",
                tags: ["cat", "treats", "eco-friendly"]
            },
            {
                id: 3,
                name: "Sustainable Bird Food",
                description: "Organic seeds in compostable packaging. Ideal for parrots and other birds.",
                price: "$18.99",
                kg: "1",
                mainCategory: "birds",
                subcategory: "parrots",
                icon: "🐦",
                tags: ["bird", "food", "organic"]
            },
            {
                id: 4,
                name: "Recycled Package Dog Treats",
                description: "Delicious treats in 100% recycled packaging. Healthy and crunchy.",
                price: "$32.50",
                kg: "2",
                mainCategory: "mammals",
                subcategory: "dogs",
                icon: "🦴",
                tags: ["dog", "treats", "recycled"]
            },
            {
                id: 5,
                name: "Organic Cat Food",
                description: "Natural ingredients for healthy felines. Supports digestive health.",
                price: "$39.99",
                kg: "4",
                mainCategory: "mammals",
                subcategory: "cats",
                icon: "🐱",
                tags: ["cat", "food", "organic"]
            },
            {
                id: 6,
                name: "Plant-Based Dog Treats",
                description: "Vegan treats that dogs absolutely love. Made with all-natural ingredients.",
                price: "$28.75",
                kg: "1.5",
                mainCategory: "mammals",
                subcategory: "dogs",
                icon: "🌱",
                tags: ["dog", "treats", "vegan"]
            },
            {
                id: 7,
                name: "Organic Lizard Food",
                description: "Healthy food for every lizard. Packed with essential nutrients.",
                price: "$19.99",
                kg: "0.3",
                mainCategory: "reptiles",
                subcategory: "lizards",
                icon: "🦎",
                tags: ["reptile", "lizard", "food"]
            },
            {
                id: 8,
                name: "Tropical Fish Food",
                description: "Nutrient-rich flakes for colorful fish. Keeps your aquarium vibrant.",
                price: "$15.99",
                kg: "0.2",
                mainCategory: "aquatic",
                subcategory: "fish",
                icon: "🐠",
                tags: ["fish", "food", "aquatic"]
            },
            {
                id: 9,
                name: "Hamster Adventure Kit",
                description: "Complete habitat set with toys and accessories for your hamster.",
                price: "$45.99",
                mainCategory: "mammals",
                subcategory: "hamsters",
                icon: "🐹",
                tags: ["hamster", "accessories", "toys"]
            },
            {
                id: 10,
                name: "Exotic Bird Perch",
                description: "Natural wood perch for exotic birds. Comfortable and durable.",
                price: "$29.99",
                mainCategory: "birds",
                subcategory: "parrots",
                icon: "🦜",
                tags: ["bird", "accessory", "perch"]
            }
        ];

        let cart = [];
        let filteredProducts = [...products];
        let currentCategory = "all";
        let currentSubcategory = "all";

        // DOM Elements
        const profileBtn = document.getElementById('profileBtn');
        const profilePanel = document.getElementById('profilePanel');
        const closeProfile = document.getElementById('closeProfile');
        const cartBtn = document.getElementById('cartBtn');
        const cartCount = document.getElementById('cartCount');
        const productGrid = document.getElementById('productGrid');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const categoryPills = document.querySelectorAll('.category-pill');
        const subcategoryPills = document.querySelectorAll('.subcategory-pill');

        // Profile panel functionality
        profileBtn.addEventListener('click', () => {
            profilePanel.classList.add('open');
        });

        closeProfile.addEventListener('click', () => {
            profilePanel.classList.remove('open');
        });

        // Close profile panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!profilePanel.contains(e.target) && !profileBtn.contains(e.target)) {
                profilePanel.classList.remove('open');
            }
        });

        // Category filtering
        categoryPills.forEach(pill => {
            pill.addEventListener('click', () => {
                categoryPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                
                currentCategory = pill.dataset.category;
                currentSubcategory = "all";
                
                // Reset subcategory pills
                subcategoryPills.forEach(p => {
                    p.classList.remove('active');
                    if (p.dataset.subcategory === "all") {
                        p.classList.add('active');
                    }
                });
                
                filterProducts();
            });
        });

        // Subcategory filtering
        subcategoryPills.forEach(pill => {
            pill.addEventListener('click', () => {
                subcategoryPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                
                currentSubcategory = pill.dataset.subcategory;
                filterProducts();
            });
        });

        // Filter products based on current selections
        function filterProducts() {
            if (currentCategory === 'all' && currentSubcategory === 'all') {
                filteredProducts = [...products];
            } else if (currentCategory === 'all') {
                filteredProducts = products.filter(product => 
                    product.subcategory === currentSubcategory
                );
            } else if (currentSubcategory === 'all') {
                filteredProducts = products.filter(product => 
                    product.mainCategory === currentCategory
                );
            } else {
                filteredProducts = products.filter(product => 
                    product.mainCategory === currentCategory && 
                    product.subcategory === currentSubcategory
                );
            }
            
            renderProducts();
        }

        // Render products
        function renderProducts() {
            productGrid.innerHTML = '';
            
            if (filteredProducts.length === 0) {
                productGrid.innerHTML = `
                    <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                        <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                        <h3>No products found</h3>
                        <p>Try adjusting your filters or search terms</p>
                    </div>
                `;
                return;
            }
            
            filteredProducts.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.style.animationDelay = `${index * 0.1}s`;

                productCard.innerHTML = `
                    <div class="product-image">${product.icon}</div>
                    <div class="product-info">
                        <div class="product-category">
                            <i class="fas fa-tag"></i>
                            ${product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1)}
                        </div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        ${product.kg ? `<p class="product-weight">${product.kg}Kg</p>` : ''}
                        <div class="product-footer">
                            <div class="product-price">${product.price}</div>
                            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                `;

                productGrid.appendChild(productCard);
            });
        }

        // Search functionality
        function performSearch() {
            const query = searchInput.value.toLowerCase().trim();
            
            if (!query) {
                filterProducts();
                return;
            }
            
            filteredProducts = products.filter(product => {
                const nameMatch = product.name.toLowerCase().includes(query);
                const descMatch = product.description.toLowerCase().includes(query);
                const catMatch = product.mainCategory.toLowerCase().includes(query);
                const subcatMatch = product.subcategory.toLowerCase().includes(query);
                const tagMatch = product.tags.some(tag => tag.toLowerCase().includes(query));
                
                return nameMatch || descMatch || catMatch || subcatMatch || tagMatch;
            });
            
            renderProducts();
        }

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Cart functionality
        function addToCart(productId) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const product = products.find(p => p.id === productId);
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            updateCartCount();

            // Visual feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Added! ✓';
            button.style.background = '#00b572';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 1000);
        }

        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Initialize
        renderProducts();
        updateCartCount();