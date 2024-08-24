import { laptops } from "./src/JS/db.js";
import { filterGoods } from "./src/JS/filter.js";
import { renderGoods } from "./src/JS/renderGoods.js";
import { renderSelect } from "./src/JS/renderSelect.js";




document.addEventListener("DOMContentLoaded", ()=>{
    renderGoods(laptops);


    const uniqueProcessors = new Set();
    const uniqueRam = new Set();
    const uniqueSorage = new Set();
    const uniqueDisplay = new Set();
    const uniqueGraphics = new Set();


    laptops.forEach(
       ( {  specs: { processor, ram, storage, display, graphics } }) => {
        uniqueProcessors.add(processor);
        uniqueRam.add(ram);
        uniqueSorage.add(storage);
        uniqueDisplay.add(display);
        uniqueGraphics.add(graphics);
    }
);


    renderSelect(Array.from (uniqueProcessors),
         document.getElementById("processorFilter"));

         renderSelect(Array.from (uniqueRam),
         document.getElementById("ramFilter"));


         renderSelect(Array.from (uniqueSorage),
         document.getElementById("storageFilter"));

         renderSelect(Array.from (uniqueDisplay),
         document.getElementById("displayFilter"));


         renderSelect(Array.from (uniqueGraphics),
         document.getElementById("graphicsFilter"));


         document.querySelectorAll("select").forEach(link => {
             link.addEventListener("change", () => {
                 filterGoods(laptops);
             });
         });


            document.getElementById("priceFilter").addEventListener("input", () => {
                document.getElementById("priceValue").textContent = document.getElementById("priceFilter").value;
                filterGoods(laptops);
            });


            
 });

 

 document.getElementById('cart-btn').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'block';
});

document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('cart-modal')) {
        document.getElementById('cart-modal').style.display = 'none';
    }
});

const cartItems = {};

function addToCart(itemName) {
    if (cartItems[itemName]) {
        cartItems[itemName].quantity++;
    } else {
        cartItems[itemName] = { quantity: 1 };
    }
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    for (const [name, { quantity }] of Object.entries(cartItems)) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemName = document.createElement('span');
        itemName.classList.add('cart-item-name');
        itemName.textContent = name;

        const itemQuantity = document.createElement('div');
        itemQuantity.classList.add('cart-item-quantity');
        itemQuantity.innerHTML = `
            <button class="decrease" data-name="${name}">-</button>
            <span>${quantity}</span>
            <button class="increase" data-name="${name}">+</button>
        `;

        cartItem.appendChild(itemName);
        cartItem.appendChild(itemQuantity);
        cartItemsContainer.appendChild(cartItem);
    }

    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            addToCart(this.getAttribute('data-name'));
        });
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            decreaseItem(this.getAttribute('data-name'));
        });
    });
}

function decreaseItem(itemName) {
    if (cartItems[itemName].quantity > 1) {
        cartItems[itemName].quantity--;
    } else {
        delete cartItems[itemName];
    }
    renderCart();
}

document.getElementById('clear-cart').addEventListener('click', function() {
    for (let item in cartItems) {
        delete cartItems[item];
    }
    renderCart();
});

// Приклад додавання товару в кошик
addToCart('Товар 1');
addToCart('Товар 2');


