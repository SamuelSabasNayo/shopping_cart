//variables
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

cartBtn.addEventListener('click', appear);

function appear() {
    cartOverlay.style.display = 'block';
}

closeCartBtn.addEventListener('click', disappear);

function disappear() {
    cartOverlay.style.display = 'none';
    // console.log('button clicked');
}



// //cart
// let cart = [];

// //getting the products
// class Products {
//     async getProducts() {
//         try {
//             let result = await fetch(products.json);
//             let data = await result.json();
//             return data; 
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
// //display products
// class UI {

// }

// //local storage
// class storage {

// }

// document.addEventListener("DOMContentLoaded", () => {
//     const ui = new UI();
//     const products = new Products();

//     //get all products
//     products.getProducts().then(data => console.log(data));
// })