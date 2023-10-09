//------------JavaScript-----------
let cardContainer = document.querySelector(".cards-container");
let trendImg = document.querySelector(".trend-img");
let nonVeg = document.querySelector(".non-veg");
let veg = document.querySelector(".veg");
let cookies = document.querySelector(".cookies");
let juices = document.querySelector(".juice");
let cardQuantity = document.querySelector(".fa-cart-shopping");
let hamburger = document.querySelector(".hamburger");
let leftContainer = document.querySelector(".left-container");

// code for hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  if (leftContainer.style.left == "-110%") {
    leftContainer.style.left ="0%"
  } else {
    leftContainer.style.left ="-110%"
  }
 
});

//code for theme preference
let theme = document.querySelector(".theme");
theme.addEventListener("click", () => {
  theme.classList.toggle("active");
});
// header section

let trends = [
  {
    img: "./Compressed Images/fishfry.jpg",
    name: "Fishfry",
  },
  {
    img: "./Compressed Images/rice-2.jpg",
    name: "Rice",
  },
  {
    img: "./Compressed Images/trend-juice.jpg",
    name: "Fruit Juice",
  },
  {
    img: "./Compressed Images/images (4).jpeg",
    name: "Bun Parotta",
  },
  {
    img: "./Compressed Images/treandbadam.jpg",
    name: "Dry Fruits",
  },
  {
    img: "./Compressed Images/burger.jpg",
    name: "Burger",
  },
];

trends.forEach((trend) => {
  let item = `<div class="circle-img">
  <img loading="lazy" src="${trend.img}" alt="">
  <p>${trend.name}</p>
 </div>`;
  trendImg.innerHTML += item;
});

let products = [
  {
    img: "./Compressed Images/ice-1.jpg",
    productName: "Vanilla",
    pDescription: "Staberry Ice Cream pack of 5",
    price: 100,
    mrp: 220,
    offer: 50,
  },
  {
    img: "./Compressed Images/ice-3.jpg",
    productName: "All Flavors",
    pDescription: "Staberry Ice Cream pack of 6",
    price: 120,
    mrp: 220,
    offer: 45,
  },
  {
    img: "./Compressed Images/ice-4.jpg",
    productName: "Strawberry",
    pDescription: "Staberry Ice Cream pack of 2",
    price: 150,
    mrp: 300,
    offer: 50,
  },
  {
    img: "./Compressed Images/ice-creams.jpg",
    productName: "Mango",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/ice-11.jpg",
    productName: "Mango",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/ice-10.jpg",
    productName: "Mango",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/ice-5.jpg",
    productName: "Mango",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/ice-6.jpg",
    productName: "Mango",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
];
products.forEach((product) => {
  let item = `<div class="card">
<div class="card-img">
  <img loading="lazy" src="${product.img}" alt="">
</div>
<div class="product-description">
  <p class="product-title">${product.productName}</p>
  <p>${product.pDescription}</p>
  <p class="rupees">&#8377<span class="rupees">${product.price}</span></p>
  <span class="light">M.R.P:<strike class="light">&#8377 ${product.mrp}</strike>(${product.offer}% Off)</span>
</div>
<button class="addtoplate" data-product-name="${product.productName}">Add To Plate</button>
</div>`;

  cardContainer.innerHTML += item;
});

let nonvegitems = [
  {
    img: "./Compressed Images/chicken.jpg",
    productName: "Chicken",
    pDescription: "Tamarind marinade for deep flavor.",
    price: 120,
    mrp: 210,
    offer: 63,
  },
  {
    img: "./Compressed Images/mutton.jpg",
    productName: "Mutton",
    pDescription: "A delicious mutton curry with spices cooked.",
    price: 60,
    mrp: 120,
    offer: 45,
  },
  {
    img: "./Compressed Images/fish.jpg",
    productName: "Fishfry",
    pDescription: "Fishfry marinated in oil & shallow in oil",
    price: 35,
    mrp: 80,
    offer: 52,
  },
  {
    img: "./Compressed Images/grill.jpg",
    productName: "Grill",
    pDescription: "This recipe is perfectly juicy and moist.",
    price: 150,
    mrp: 275,
    offer: 58,
  },
  {
    img: "./Compressed Images/chicken-shwaema.webp",
    productName: "Shawarma",
    pDescription: "The recipe has a burst of flavor in every bite",
    price: 100,
    mrp: 170,
    offer: 57,
  },
  {
    img: "./Compressed Images/chicken 65 10.JPG",
    productName: "Chicken 65",
    pDescription: "Marinated and deep fried chicken pieces",
    price: 80,
    mrp: 170,
    offer: 68,
  },
  {
    img: "./Compressed Images/beef.jpg",
    productName: "Beef",
    pDescription: "Tender beef chunks coated with savory",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/chicken-2.jpg",
    productName: "Pork",
    pDescription: "Honey carlic glazed pork roast recipe",
    price: 130,
    mrp: 200,
    offer: 28,
  },
];
nonvegitems.forEach((item) => {
  let nonevegs = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Plate</button>
        </div>`;
  nonVeg.innerHTML += nonevegs;
});

let vegItems = [
  {
    img: "./Compressed Images/tradition.jpeg",
    productName: "Traditional",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 200,
    mrp: 320,
    offer: 47,
  },
  {
    img: "./Compressed Images/dosai-1.jpg",
    productName: "Dosai",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/idly.jpg",
    productName: "Idli",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/pongal & vadai.jpeg",
    productName: "Pongal",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/images (2).jpeg",
    productName: "Parotta",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/images (5).jpeg",
    productName: "Poori",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/images (6).jpeg",
    productName: "Naan",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/veg-briyani.jpg",
    productName: "Veg Briyani",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
];
vegItems.forEach((item) => {
  let vegs = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Plate</button>
        </div>`;
  veg.innerHTML += vegs;
});

let biscuitItems = [
  {
    img: "./Compressed Images/biscuits.jpeg",
    productName: "Biscuits",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 200,
    mrp: 320,
    offer: 47,
  },
  {
    img: "./Compressed Images/rose-cake.jpg",
    productName: "Straberry Cake",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/combo-snacks.jpg",
    productName: "Crunchy Snacks",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/chips.jpg",
    productName: "Potato Chips",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/cup-cake.jpg",
    productName: "Cup Cake",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/buscuit.jpg",
    productName: "Choco Biscuits",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/blackforest.jpg",
    productName: "Black Forest",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/candies.jpeg",
    productName: "Candies",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
];
biscuitItems.forEach((item) => {
  let biscuit = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Plate</button>
        </div>`;
  cookies.innerHTML += biscuit;
});

let juiceitems = [
  {
    img: "./Compressed Images/water.webp",
    productName: "Watermelon Juice",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/trend-juice.jpg",
    productName: "Fruit Mixer",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },

  {
    img: "./Compressed Images/grapes.jpg",
    productName: "Grapes Juice",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/lemon.jpg",
    productName: "Lemon Juice",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/orange-juice.jpg",
    productName: "Orange Juice",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 200,
    mrp: 320,
    offer: 47,
  },

  {
    img: "./Compressed Images/color-juice.jpg",
    productName: "Cup Cake",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },

  {
    img: "./Compressed Images/pomegranate-fruit.jpg",
    productName: "Pomegranate",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/mangos.jpg",
    productName: "Mango Juice",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
];
juiceitems.forEach((item) => {
  let juice = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Glass</button>
        </div>`;
  juices.innerHTML += juice;
});

let btns = document.querySelectorAll(".addtoplate");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const products = btn.dataset.productName;
    let matching;
    card.forEach((pName) => {
      if (pName.prodcutName == products) {
        matching = pName;
      }
    });

    if (matching) {
      matching.quantity += 1;
    } else {
      card.push({
        prodcutName: products,
        quantity: 1,
      });
    }
    let carditems = 0;
    card.forEach((item) => {
      carditems += item.quantity;
    });
    cardQuantity.innerHTML = carditems;
  });
});
