
export function renderGoods(goods){
    
    const laptopCard = goods.map(({name, image, price, availability, specs: {processor, ram, storage, display, graphics},
    }) => {
        
        return `  <div class="card">
        <img src="${image}">
        <h3>${name}</h3>
        <ul>
            <li> ${processor}</li>
            <li> ${ram}</li>
            <li> ${storage}</li>
            <li> ${display}</li>
            <li> ${graphics}</li>
        </ul>
        <button class="buyBtn" ${!availability ? "disabled" : ""}>
            ${!availability ? "Купити" : `"Замовити" ${price} <span>${price} $</span>`}

        </button>

        </div>`;
    }
).join("");
console.log(laptopCard);
document.querySelector(".goods_container").innerHTML =  laptopCard;

}