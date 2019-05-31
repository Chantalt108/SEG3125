var restName = "The Restaurant That Only Sells Pizza";
var restNameRef = document.getElementById("rest-name");
restNameRef.innerHTML = restName;

var cartNameRef = document.getElementById("cart-header");
cartNameRef.innerHTML = "Your order from " + restName + ":";

var items = [
    {
        name: 'Pizza 1',
        price: '$5',
        image: null
    },
    {
        name: 'Pizza 2',
        price: '$5',
        image: null
    }
]

items.forEach(item => {
    var div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.setAttribute('id', item.name);

    var divWrapper = document.getElementById('menu-sections');
    divWrapper.appendChild(div);

    var name = document.createElement('div');
    name.setAttribute('class', 'item-name');
    name.innerHTML = item.name;

    var price = document.createElement('div');
    name.setAttribute('class', 'item-price');
    price.innerHTML = item.price;

    var image = document.createElement('img');
    image.setAttribute('src', 'stuffed crust pizza.jpg');
    image.setAttribute('class', 'item-image');

    var btnId = items.indexOf(item) + '-button';

    var cartButton = document.createElement('button');
    cartButton.setAttribute('class', 'add-to-cart');
    cartButton.setAttribute('type', 'button');
    cartButton.setAttribute('id', btnId);
    cartButton.innerHTML = "Add to Cart";

    var itemWrapper = document.getElementById(item.name);
    itemWrapper.appendChild(name);
    itemWrapper.appendChild(price);
    itemWrapper.appendChild(image);
    itemWrapper.appendChild(cartButton);

    document.getElementById(btnId).addEventListener("click", () => 
        addToCart(item)
    );
});

document.getElementById('checkout-btn').onclick = function () {
    location.href = '../Cart/cart.html';
};

function addToCart(item) {
    var itemId = item.name + "_inCart";

    var cartItem = document.createElement('div');
    cartItem.setAttribute('class', 'cart-item');
    cartItem.setAttribute('id', itemId);

    var cartSection = document.getElementById('cart-section');
    cartSection.appendChild(cartItem);

    var cartItemName = document.createElement('div');
    cartItemName.innerHTML = item.name;

    var cartItemPrice = document.createElement('div');
    cartItemPrice.innerHTML = item.price;

    var cartItemWrapper = document.getElementById(itemId);
    cartItemWrapper.appendChild(cartItemName);
    cartItemWrapper.appendChild(cartItemPrice);
}
