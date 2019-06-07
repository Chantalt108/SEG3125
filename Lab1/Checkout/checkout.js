var e = document.getElementById("paymentType");
var paymentType = e.options[e.selectedIndex].value;
var cart = (JSON.parse(localStorage.getItem('cart')));
var cartWrapper = document.getElementById('summary');

var stWrapper = document.getElementById('totalPrice');
stWrapper.setAttribute('class', 'subtotal');
stWrapper.innerHTML = "$" + (parseInt(localStorage.getItem('subtotal')) * 1.15).toFixed(2);

cart.forEach(item => {
    var itemSection = document.createElement('div');
    itemSection.setAttribute('class', 'cart-item');
    
    var itemName = document.createElement('div');
    itemName.innerHTML = item.name;

    var itemPrice = document.createElement('div');
    itemPrice.innerHTML = "$" + item.price.toFixed(2);

    var itemQuan = document.createElement('div');
    itemQuan.innerHTML = item.quantity;

    itemSection.appendChild(itemName);
    itemSection.appendChild(itemPrice);
    itemSection.appendChild(itemQuan);

    cartWrapper.appendChild(itemSection);
}); 

st.innerHTML = subtotal;

function detectOpt(){
    paymentType = e.options[e.selectedIndex].value;
    if (paymentType == "Debit"){   
        document.getElementById("paymentDetails").style.display = "block";
        document.getElementById("payByCash").style.display = "none";
    }
    else if(paymentType == "Credit"){
        document.getElementById("paymentDetails").style.display = "block";
        document.getElementById("payByCash").style.display = "none";
    }
    else{
        document.getElementById("paymentDetails").style.display = "none";
        document.getElementById("payByCash").style.display = "block";
        
    }

}