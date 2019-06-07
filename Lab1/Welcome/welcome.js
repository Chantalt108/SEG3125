let mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Late Night', 'Dessert'];
let cuisines = ['Indian', 'Chinese', 'Italian', 'Burgers', 'Vegan', 'Thai'];

var isClicked = false;
var mTypeId = "";
var cTypeId = "";

mealTypes.forEach(mealType => {
    var b = document.createElement('button');
    b.setAttribute('content', mealType);
    b.setAttribute('class', 'subsection');
    b.setAttribute('id', mealType);
    b.setAttribute('onclick', "mTypeClicked(this.id, " + mealType + ")");
    b.innerHTML = mealType;

    b.addEventListener("click", () => {
        localStorage.setItem('search', mealType);
        window.location.href = "../ListOfRestaurants/ListOfRestaurants.html" + '#' + mealType;
    });

    var wrapper = document.getElementById('mealTypes');
    wrapper.appendChild(b);
});

cuisines.forEach(cuisine => {
    var b = document.createElement('button');
    b.setAttribute('content', cuisine);
    b.setAttribute('class', 'subsection');
    b.setAttribute('id', cuisine);
    // b.setAttribute('onclick', "cTypeClicked(this.id, " + cuisine + ")");
    b.innerHTML = cuisine;

    b.addEventListener("click", () => {
        localStorage.setItem('search', cuisine);
        window.location.href = "../ListOfRestaurants/ListOfRestaurants.html" + '#' + cuisine;
    });

    var wrapper = document.getElementById('cuisines');
    wrapper.appendChild(b);
});

function mTypeClicked(mTypeId, mType) {
    isClicked = true;
    localStorage.setItem('search', mType);
    window.location.href = "../ListOfRestaurants/ListOfRestaurants.html" + '#' + mTypeId;
}

function cTypeClicked(cTypeId, cuis) {
    isClicked = true;
    window.location.href = "../ListOfRestaurants/ListOfRestaurants.html" + '#' + cTypeId;
}