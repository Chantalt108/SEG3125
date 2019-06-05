var cart = (JSON.parse(localStorage.getItem('cart')));
var cartWrapper = document.getElementById('summary');
var subtotal = localStorage.getItem('subtotal');

var stWrapper = document.getElementById('subtotal-section');
stWrapper.setAttribute('class', 'subtotal');

var st = document.getElementById('subtotal');

function loadCart() {
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

    st.innerHTML = "$" + subtotal;
}




