let cities = ['Ottawa', 'Toronto', 'Kingston', 'Montreal'];
let mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Late Night', 'Dessert'];
let cuisines = ['Indian', 'Chinese', 'Italian', 'Burgers', 'Vegan', 'Thai'];


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
    b.innerHTML = mealType;

    var wrapper = document.getElementById('mealTypes');
    wrapper.appendChild(b);
});

cuisines.forEach(cuisine => {
    var b = document.createElement('button');
    b.setAttribute('content', cuisine);
    b.setAttribute('class', 'subsection');
    b.innerHTML = cuisine;

    var wrapper = document.getElementById('cuisines');
    wrapper.appendChild(b);
