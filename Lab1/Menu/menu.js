var restId = window.location.hash.substr(1);
var restName = "The Restaurant That Only Sells Pizza";
var subtotal = 0;
var subtotalString;
var itemCounter = -1;
var restNameRef;
var cartNameRef;
var subtotalWrapper;
var test = "test";
var cart = [];

var items = [
    {
        name: 'Pizza 1',
        price: 5.50,
        image: 'stuffed crust pizza.jpg',
        quantity: 1
    },
    {
        name: 'Pizza 2',
        price: 4.75,
        image: 'stuffed crust pizza.jpg',
        quantity: 1
    }
]

function getElements() {
    restNameRef = document.getElementById("rest-name");
    restNameRef.innerHTML = restName;
    cartNameRef = document.getElementById("cart-header");
    cartNameRef.innerHTML = "Your order from " + restName + ":";
    subtotalWrapper = document.getElementById('subtotal');

    addItems();
}

function loadMenu() {
    if(restId == "rest1"){
        //Load corresponding menu items based on restId
    }
}

function addItems() {
    items.forEach(item => {
        var itemDiv = document.createElement('div');
        itemDiv.setAttribute('class', 'item');
        itemDiv.setAttribute('id', item.name);
        
        var divWrapper = document.getElementById('menu-sections');
        divWrapper.appendChild(itemDiv);

        var image = document.createElement('img');
        image.setAttribute('src', item.image);
        image.setAttribute('class', 'item-image');

        var name = document.createElement('div');
        name.setAttribute('class', 'item-name');
        name.innerHTML = item.name;

        var price = document.createElement('div');
        price.setAttribute('class', 'item-price');
        price.innerHTML = "$" + item.price.toFixed(2);

        var nameAndPrice = document.createElement('div');
        nameAndPrice.setAttribute('class', 'name-and-price');
        nameAndPrice.appendChild(name);
        nameAndPrice.appendChild(price);

        var quantity = document.createElement('div');
        quantity.setAttribute('class', 'quantity');

        var qId = items.indexOf(item) + '-quantity'
        var quantNum = document.createElement('div');
        quantNum.setAttribute("id", qId);
        quantNum.innerHTML = item.quantity;
        
        var incQuant = document.createElement('button');
        incQuant.setAttribute("id", items.indexOf(item) + '-inc');
        incQuant.innerHTML = "+";

        var decQuant = document.createElement('button');
        decQuant.setAttribute("id", items.indexOf(item) + '-dec');
        decQuant.innerHTML = "-";

        quantity.appendChild(decQuant);
        quantity.appendChild(quantNum);
        quantity.appendChild(incQuant);

        incQuant.onclick = function () {
            item.quantity ++;
            document.getElementById(qId).innerHTML = item.quantity;
        };

        decQuant.onclick = function () {
            item.quantity --;
            document.getElementById(qId).innerHTML = item.quantity;
        };

        var btnId = items.indexOf(item) + '-button';

        var cartButton = document.createElement('button');
        cartButton.setAttribute('class', 'add-to-cart');
        cartButton.setAttribute('type', 'button');
        cartButton.setAttribute('id', btnId);
        cartButton.innerHTML = "Add to Cart";

        var itemWrapper = document.getElementById(item.name);
        itemWrapper.appendChild(image);
        itemWrapper.appendChild(nameAndPrice);
        itemWrapper.appendChild(quantity);
        itemWrapper.appendChild(cartButton);

        document.getElementById(btnId).addEventListener("click", () => {
            addToCart(item);
        });
    });

    document.getElementById('checkout-btn').onclick = function () {
        location.href = '../Cart/cart.html';
    };

}

function addToCart(item) {
    itemCounter++;

    var itemSectionId = item.name + itemCounter + "_inCart";
    var itemID = itemSectionId+"_section";
    var delBtnID = itemSectionId + "_delBtn";

    //check if item already exists in card
    if(cart.indexOf(item) > -1){
        var itemInCart = document.getElementById(cart[cart.indexOf(item)].id);
        var quantity = itemInCart.childNodes[2];
        quantity.innerHTML = parseInt(quantity.innerHTML, 10) + item.quantity;   
    } else {
        cart.push(item);
        cart[cart.indexOf(item)].id = itemID;

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
    
        var cartItemQuantity = document.createElement('div');
        cartItemQuantity.innerHTML = item.quantity;
    
        var cartItemWrapper = document.getElementById(itemID);
        cartItemWrapper.appendChild(cartItemName);
        cartItemWrapper.appendChild(cartItemPrice);
        cartItemWrapper.appendChild(cartItemQuantity);

        document.getElementById(delBtnID).addEventListener("click", () => 
        deleteFromCart(item, cartSection, cartItemSection)
    );
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    subtotal += item.price;
    subtotalString = "$" + subtotal.toFixed(2);
    localStorage.setItem('subtotal', subtotalString);

    subtotalWrapper.innerHTML = subtotalString;
}

function deleteFromCart(item, cartSection, cartItemSection) {
    cartSection.removeChild(cartItemSection);
    subtotal -= item.price;
    subtotalString = "$" + subtotal.toFixed(2);
    subtotalWrapper.innerHTML = subtotalString;
    
    cart.splice(cart.indexOf(item), 1);
    localStorage.setItem('cart', JSON.stringify(cart));
}