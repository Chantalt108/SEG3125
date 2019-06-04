var cart = (JSON.parse(localStorage.getItem('cart')));
var cartWrapper = document.getElementById('summary');

function fillCart() {
    console.log(cart);

    cart.forEach(item => {
        var itemSection = document.createElement('div');
        itemSection.setAttribute('class', 'cart-item');
        
        var itemName = document.createElement('div');
        itemName.innerHTML = item.name;

        var itemPrice = document.createElement('div');
        itemPrice.innerHTML = "$" + item.price.toFixed(2);

        itemSection.appendChild(itemName);
        itemSection.appendChild(itemPrice);

        cartWrapper.appendChild(itemSection);
    }); 
}




