var total = 0;
var message = "Press OK to continue to checkout or Cancel to go back to the Menu.";
function navToCheckout(){
    
    if (window.confirm("Press OK to continue to checkout or Cancel to go back to the Menu.")) { 
        window.location.href = "../Checkout/Checkout.html";      
      }
    else{
        window.location.href = "../Menu/Menu.html";   
    }
}
