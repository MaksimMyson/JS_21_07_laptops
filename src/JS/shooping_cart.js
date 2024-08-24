const cart = [];
const cartElement = document.querySelector('.cart'); // Ваш елемент корзини

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        } else {
            cart.splice(productIndex, 1);
        }
    }
    renderCart();
}

function clearCart() {
    cart.length = 0;
    renderCart();
}

function renderCart() {
    cartElement.innerHTML = ''; // Очищуємо елемент корзини
    let total = 0;
    cart.forEach(product => {
        total += product.price * product.quantity;
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <div>${product.name} - ${product.price} $ x ${product.quantity}</div>
            <button onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">+</button>
            <button onclick="removeFromCart(${product.id})">-</button>
        `;
        cartElement.appendChild(productElement);
    });
    cartElement.innerHTML += `<div>Total: ${total} $</div><button onclick="clearCart()">Clear</button>`;
}

// Приклад продуктів
const products = [
    { id: 1, name: 'Lenovo ThinkPad X1 Carbon', price: 1399 },
    { id: 2, name: 'ASUS ROG Zephyrus G14', price: 1499 }
];

// Додавання товарів до корзини на прикладі натискання кнопок
document.querySelectorAll('.add-to-cart-button').forEach((button, index) => {
    button.addEventListener('click', () => addToCart(products[index]));
});
