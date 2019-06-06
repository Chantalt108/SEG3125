var e = document.getElementById("paymentType");
var paymentType = e.options[e.selectedIndex].value;


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