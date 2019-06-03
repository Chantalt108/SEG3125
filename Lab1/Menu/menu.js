var restId = window.location.hash.substr(1);
var restName = "The Restaurant That Only Sells Pizza";
var restNameRef = document.getElementById("rest-name");
restNameRef.innerHTML = restName;

function loadMenu() {
    if(restId == "rest1"){
        //Load corresponding menu items based on restId
    }
}

var cartNameRef = document.getElementById("cart-header");
cartNameRef.innerHTML = "Your order from " + restName + ":";

var items = [
    {
        name: 'Pizza 1',
        price: 5.50,
        image: null
    },
    {
        name: 'Pizza 2',
        price: 4.75,
        image: null
    }
]

var subtotal = 0;
var subtotalString;
var itemCounter = -1;
var subtotalWrapper = document.getElementById('subtotal');

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
    price.innerHTML = "$" + item.price;

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
    itemCounter++;

    subtotal += item.price;
    subtotalString = "$" + subtotal.toFixed(2);

    var itemSectionId = item.name + itemCounter + "_inCart";
    var itemID = itemSectionId+"_section";
    var delBtnID = itemSectionId + "_delBtn";

    var cartItemSection = document.createElement('div');
    cartItemSection.setAttribute('class', 'cart-item-section');
    cartItemSection.setAttribute('id', itemSectionId);

    var cartSection = document.getElementById('cart-section');
    cartSection.appendChild(cartItemSection);

    //create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.setAttribute('id', delBtnID);
    deleteBtn.innerHTML = "X";

    //create section for name and price 
    var cartItem = document.createElement('div');
    cartItem.setAttribute('class', 'cart-item');
    cartItem.setAttribute('id', itemID);

    var cartItemSectionWrapper = document.getElementById(itemSectionId);
    cartItemSectionWrapper.appendChild(deleteBtn);
    cartItemSectionWrapper.appendChild(cartItem);

    //create variables for name and price
    var cartItemName = document.createElement('div');
    cartItemName.innerHTML = item.name;

    var cartItemPrice = document.createElement('div');
    cartItemPrice.innerHTML = "$" + item.price.toFixed(2);

    var cartItemWrapper = document.getElementById(itemID);
    cartItemWrapper.appendChild(cartItemName);
    cartItemWrapper.appendChild(cartItemPrice);

    subtotalWrapper.innerHTML = subtotalString;

    document.getElementById(delBtnID).addEventListener("click", () => 
        deleteFromCart(item, cartSection, cartItemSection)
    );
}

function deleteFromCart(item, cartSection, cartItemSection) {
    cartSection.removeChild(cartItemSection);
    subtotal -= item.price;
    subtotalString = "$" + subtotal.toFixed(2);
    subtotalWrapper.innerHTML = subtotalString;
}