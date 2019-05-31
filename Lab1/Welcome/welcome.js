let cities = ['Ottawa', 'Toronto', 'Kingston', 'Montreal'];
let mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Late Night', 'Dessert'];
let cuisines = ['Indian', 'Chinese', 'Italian', 'Burgers', 'Vegan', 'Thai'];
var isClicked = false;
var mTypeId = "";
var cTypeId = "";

var citySelect = document.getElementById('city-select').options;
cities.forEach(city =>
    citySelect.add(
        new Option(city)
    )
);

mealTypes.forEach(mealType => {
    var b = document.createElement('button');
    b.setAttribute('content', mealType);
    b.setAttribute('class', 'subsection');
    b.setAttribute('id', mealType);
    b.setAttribute('onclick', "mTypeClicked(this.id)");
    b.innerHTML = mealType;

    var wrapper = document.getElementById('mealTypes');
    wrapper.appendChild(b);

});

cuisines.forEach(cuisine => {
    var b = document.createElement('button');
    b.setAttribute('content', cuisine);
    b.setAttribute('class', 'subsection');
    b.setAttribute('id', cuisine);
    b.setAttribute('onclick', "cTypeClicked(this.id)");
    b.innerHTML = cuisine;

    var wrapper = document.getElementById('cuisines');
    wrapper.appendChild(b);
});

function mTypeClicked(mTypeId) {
    isClicked = true;
    window.location.href = "../ListOfRestaurants/ListOfRestaurants.html" + '#' + mTypeId;
}

function cTypeClicked(cTypeId) {
    isClicked = true;
    window.location.href = "../ListOfRestaurants/ListOfRestaurants.html" + '#' + cTypeId;
}