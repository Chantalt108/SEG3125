var isClicked = false;
var restId = "";

function navMenu(restId) {
    isClicked = true;
    window.location.href = "../Menu/Menu.html" + '#' + restId;      
}