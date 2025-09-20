const products = [

  
    //  Mamauals
    {
        id: 1,
        name: "Premium Organic Dog Food",
        description: "100% organic ingredients with sustainable packaging. Perfect for all dog breeds.",
        price: "$9.99",
        kg: "5",
        mainCategory: "mammals",
        subcategory: "dogs",
        icon: "🦮",
        tags: ["organic", "dog", "food", "sustainable"]
    },
    {
        id: 2,
        name: "Grain-Free Puppy Food",
        description: "Special formula for growing puppies, packed with essential nutrients.",
        price: "$8.99",
        kg: "4",
        mainCategory: "mammals",
        subcategory: "dogs",
        icon: "🐕",
        tags: ["dog", "food", "puppy"]
    },
    {
        id: 3,
        name: "Recycled Package Dog Treats",
        description: "Delicious treats in 100% recycled packaging. Healthy and crunchy.",
        price: "$12.50",
        kg: "2",
        mainCategory: "mammals",
        subcategory: "dogs",
        icon: "🦴",
        tags: ["dog", "treats", "recycled"]
    },
    {
        id: 4,
        name: "Plant-Based Dog Treats",
        description: "Vegan treats that dogs absolutely love. Made with all-natural ingredients.",
        price: "$15.75",
        kg: "1.5",
        mainCategory: "mammals",
        subcategory: "dogs",
        icon: "🌱🐩",
        tags: ["dog", "treats", "vegan"]
    },
    {
        id: 5,
        name: "Premium Dog Kibble",
        description: "High-protein dry food for adult dogs. Supports healthy coat and energy.",
        price: "$19.99",
        kg: "5",
        mainCategory: "mammals",
        subcategory: "dogs",
        icon: "🐕‍🦺",
        tags: ["dog", "food", "dry"]
    },
    {
        id: 6,
        name: "Eco-Friendly Cat Treats",
        description: "Made from recycled ocean plastic packaging. Your cat will love these tasty snacks!",
        price: "$13.99",
        kg: "0.5",
        mainCategory: "mammals",
        subcategory: "cats",
        icon: "🐱",
        tags: ["cat", "treats", "eco-friendly"]
    },
    {
        id: 7,
        name: "Chicken & Tuna Cat Kibble",
        description: "Balanced dry food with chicken and tuna for adult cats.",
        price: "$24.99",
        kg: "3",
        mainCategory: "mammals",
        subcategory: "cats",
        icon: "🐈",
        tags: ["cat", "food", "dry"]
    },
    {
        id: 8,
        name: "Kitten Growth Formula",
        description: "High-calorie, vitamin-rich food for kittens’ rapid growth.",
        price: "$19.99",
        kg: "2.5",
        mainCategory: "mammals",
        subcategory: "cats",
        icon: "🐈 🐕",
        tags: ["cat", "food", "kitten"]
    },
    {
        id: 9,
        name: "Organic Cat Food",
        description: "Natural ingredients for healthy felines. Supports digestive health.",
        price: "$19.99",
        kg: "4",
        mainCategory: "mammals",
        subcategory: "cats",
        icon: "🐱",
        tags: ["cat", "food", "organic"]
    },
    {
        id:10,
        name: "Organic Rabbit Treats",
        description: "Natural ingredients for healthy rabbits. Supports digestive health. And are shaped like small carrots.",
        price: "$10.99",
        kg: "1",
        mainCategory: "mammals",
        subcategory: "rabiits",
        icon: "🐰",
        tags: ["rabbit", "food", "organic"]
    },
    {
        id: 11,
        name: "Rabbit Growth Formula",
        description: "High calorie, dry food for rabbits with all the nutrients needed for grouth.",
        price: "$29.99",
        kg: "1",
        mainCategory: "mammals",
        subcategory: "rabiits",
        icon: "🐇",
        tags: ["rabbit", "food",]
    },
    {
        id: 12,
        name: "Vitamin C Guinea Pig Pellets",
        description: "Fortified food with vitamin C for guinea pig health.",
        price: "$13.99",
        kg: "1.8",
        mainCategory: "mammals",
        subcategory: "guinea pigs",
        icon: "🐹",
        tags: ["guinea pig", "food", "pellets"]
    },
    {
        id: 15,
        name: "Organic Herbal Guinea Pig Mix",
        description: "Natural blend of herbs, flowers, and veggies for a balanced diet.",
        price: "$10.99",
        kg: "1.2",
        mainCategory: "mammals",
        subcategory: "guinea pigs",
        icon: "🐹",
        tags: ["guinea pig", "food", "organic", "herbs"]
    },
    {
        id: 16,
        name: "Vitamin-Enriched Guinea Pig Nuggets",
        description: "Complete nutrition with essential vitamins and minerals.",
        price: "$12.49",
        kg: "2.0",
        mainCategory: "mammals",
        subcategory: "guinea pigs",
        icon: "🐹",
        tags: ["guinea pig", "food", "nuggets", "vitamins"]
    },
    {
        id: 17,
        name: "Hamster Seed Mix",
        description: "Blend of seeds, grains, and dried fruits for hamsters.",
        price: "$8.99",
        kg: "1",
        mainCategory: "mammals",
        subcategory: "hamsters",
        icon: "🐹",
        tags: ["hamster", "food", "seeds"]
    },
    {
        id: 18,
        name: "Protein-Rich Hamster Pellets",
        description: "High-protein fortified pellets for optimal hamster health.",
        price: "$9.49",
        kg: "0.8",
        mainCategory: "mammals",
        subcategory: "hamsters",
        icon: "🐹",
        tags: ["hamster", "food", "pellets", "protein"]
    },
    {
        id: 19,
        name: "Premium Ferret Kibble",
        description: "High-protein, grain-free formula for optimal ferret nutrition.",
        price: "$15.99",
        kg: "1.5",
        mainCategory: "mammals",
        subcategory: "ferrets",
        icon: "🦡",
        tags: ["ferret", "food", "kibble", "high-protein"]
    },
    {
        id: 20,
        name: "Freeze-Dried Ferret Treats",
        description: "100% meat treats for training and rewarding your ferret.",
        price: "$7.99",
        kg: "0.2",
        mainCategory: "mammals",
        subcategory: "ferrets",
        icon: "🦡",
        tags: ["ferret", "treats", "freeze-dried", "meat"]
    },
    {
        id: 21,
        name: "Gourmet Mouse Seed Mix",
        description: "Nutrient-rich blend of seeds, grains, and dried veggies for mice.",
        price: "$5.99",
        kg: "0.5",
        mainCategory: "mammals",
        subcategory: "mice",
        icon: "🐭",
        tags: ["mouse", "food", "seeds", "natural"]
    },
    {
        id: 22,
        name: "Fortified Mouse Pellets",
        description: "Lab-tested pellets with essential vitamins for pet mice.",
        price: "$6.49",
        kg: "0.75",
        mainCategory: "mammals",
        subcategory: "mice",
        icon: "🐭",
        tags: ["mouse", "food", "pellets", "vitamins"]
    },
    
    // Birds
    {
        id: 23,
        name: "Parrot Nutri-Mix",
        description: "Seed and nut blend with vitamins for parrots and other large birds.",
        price: "$15.99",
        kg: "1.5",
        mainCategory: "birds",
        subcategory: "parrots",
        icon: "🦜",
        tags: ["bird", "food", "seeds"]
    },
    {
        id: 24,
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
        id: 25,
        name: "Exotic Bird Perch",
        description: "Natural wood perch for exotic birds. Comfortable and durable.",
        price: "$29.99",
        kg: "1",
        mainCategory: "birds",
        subcategory: "parrots",
        icon: "🦜",
        tags: ["bird", "accessory", "perch"]
    }, 


    // Aquatic pets
    {
        id: 26,
        name: "Tropical Fish Food",
        description: "Nutrient-rich flakes for colorful fish. Keeps your aquarium vibrant.",
        price: "$10.99",
        kg: "0.2",
        mainCategory: "aquatic",
        subcategory: "fish",
        icon: "🐟",
        tags: ["fish", "food", "aquatic"]
    },
    {
        id: 27,
        name: "Goldfish Flakes",
        description: "Nutrient-rich flakes for bright colors and healthy fins.",
        price: "$5.99",
        kg: "0.2",
        mainCategory: "aquatic",
        subcategory: "fish",
        icon: "🐠",
        tags: ["goldfish", "food", "flakes"]
    },
    {
        id: 28,
        name: "Aquatic Crab Protein Snacs",
        description: "Sinking pellets with shrimp meal & algae for freshwater and marine crabs.",
        price: "$9.99",
        kg: "0.3",
        mainCategory: "aquatic",
        subcategory: "crabs",
        icon: "🦀",
        tags: ["crab", "food", "snack", "protein", "aquatic"]
    },

    // Reptiles
    {
        id: 29,
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
        id: 30,
        name: "Turtle Floating Pellets",
        description: "Balanced diet pellets for aquatic and semi-aquatic turtles.",
        price: "$7.99",
        kg: "0.5",
        mainCategory: "reptiles",
        subcategory: "turtles",
        icon: "🐢",
        tags: ["turtle", "food", "pellets"]
    },
    {
        id: 31,
        name: "Premium Frog & Tadpole Food",
        description: "Nutrient-rich pellets with spirulina for aquatic frogs and developing tadpoles.",
        price: "$12.99",
        kg: "0.25",
        mainCategory: "reptiles",
        subcategory: "frogs",
        icon: "🐸",
        tags: ["frog", "tadpole", "food", "aquatic"]
    },
    {
        id: 32,
        name: "Sinking Axolotl Pellets",
        description: "High-protein soft pellets designed for axolotls' sensitive digestion.",
        price: "$14.49",
        kg: "0.4",
        mainCategory: "reptiles",
        subcategory: "axolotls",
        icon: "🦎",
        tags: ["axolotl", "food", "sinking pellets", "protein"]
    },
    {
        id: 33,
        name: "Frozen Feeder Mice (Small)",
        description: "Humanely frozen mice, perfect for small snakes (thaw before feeding).",
        price: "$19.99",
        kg: "1.0",
        mainCategory: "reptiles",
        subcategory: "snakes",
        icon: "🐍",
        tags: ["snake", "food", "frozen mice", "feeder"]
    },

    // Exotic animals
    {
        id: 34,
        name: "Live Crickets (Small)",
        description: "Gut-loaded live crickets, perfect for tarantulas and other arachnids.",
        price: "$4.99",
        kg: "0.1",
        mainCategory: "exotic",
        subcategory: "tarantulas",
        icon: "🕷️",
        tags: ["tarantula", "food", "live feeders", "crickets"]
    },
    {
        id: 35,
        name: "Mealworm Culture Cup",
        description: "Live mealworms packed with nutrients for scorpions and small predators.",
        price: "$6.49",
        kg: "0.15",
        mainCategory: "exotic",
        subcategory: "scorpions",
        icon: "🦂",
        tags: ["scorpion", "food", "live feeders", "mealworms"]
    },
    {
        id: 36,
        name: "Insectivore Hedgehog Kibble",
        description: "High-protein, low-fat kibble with insect meal for optimal hedgehog nutrition.",
        price: "$16.99",
        kg: "1.2",
        mainCategory: "exotic",
        subcategory: "hedgehogs",
        icon: "🦔",
        tags: ["hedgehog", "food", "kibble", "high-protein"]
    },
    {
        id: 37,
        name: "Capybara Herbivore Mix",
        description: "Fortified pellets with grasses, veggies, and vitamin C for giant rodents.",
        price: "$22.99",
        kg: "5.0",
        mainCategory: "exotic",
        subcategory: "capybaras",
        icon: "🐹",
        tags: ["capybara", "food", "herbivore", "vitamin C"]
    },
    {
        id: 38,
        name: "Flightless Fruit Flies Culture",
        description: "Live wingless Drosophila for mantises and small insectivores.",
        price: "$8.49",
        kg: "0.05",
        mainCategory: "exotic",
        subcategory: "mantises",
        icon: "🦗",
        tags: ["praying mantis", "food", "live feeders", "fruit flies"]
    }

]


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

// // Render products
// function renderProducts() {
//     productGrid.innerHTML = '';
    
//     if (filteredProducts.length === 0) {
//         productGrid.innerHTML = `
//             <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;">
//                 <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
//                 <h3>No products found</h3>
//                 <p>Try adjusting your filters or search terms</p>
//             </div>
//         `;
//         return;
//     }
    
//     filteredProducts.forEach((product, index) => {
//         const productCard = document.createElement('div');
//         productCard.className = 'product-card';
//         productCard.style.animationDelay = `${index * 0.1}s`;

//         productCard.innerHTML = `
//             <div class="product-image">${product.icon}</div>
//             <div class="product-info">
//                 <div class="product-category">
//                     <i class="fas fa-tag"></i>
//                     ${product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1)}
//                 </div>
//                 <h3 class="product-name">${product.name}</h3>
//                 <p class="product-description">${product.description}</p>
//                 ${product.kg ? `<p class="product-weight">${product.kg}Kg</p>` : ''}
//                 <div class="product-footer">
//                     <div class="product-price">${product.price}</div>
//                     <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
//                 </div>
//             </div>
//         `;



//         productGrid.appendChild(productCard);
//     });
// }
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
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Attach event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Show the email popout
            const popout = document.getElementById('emailPopout');
            popout.style.display = 'block';
        });
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

// // Cart functionality
// function addToCart(productId) {
//     const existingItem = cart.find(item => item.id === productId);
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         const product = products.find(p => p.id === productId);
//         cart.push({
//             ...product,
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
//         button.style.background = '';
//     }, 1000);
// }





function addToCart(event, productId) {
    // Find product in products array
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    
    // Visual feedback
    const button = event.target;
    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = 'Added! ✓';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
        button.disabled = false;
    }, 1000);
}












function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}




// Event delegation for add to cart buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        addToCart(e, productId);
    }
});








// Initialize
renderProducts();
updateCartCount();