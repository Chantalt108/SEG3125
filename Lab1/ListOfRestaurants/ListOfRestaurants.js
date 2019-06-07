var isClicked = false;
var restId = "";

var restaurants = [
    {   
        id: "rest1",
        name: "Indian restaurant",
        rating: "4 stars",
        address: "1234 Street",
        type: ["indian", "lunch", "dinner", "late night"],
        priceRange: "$10-$15",
        hours: "24 hours",
        image: "1200px-Fast_Food_Restaurant_in_Malinska_im_Hafen.jpg"
    },
    {   
        id: "rest2",
        name: "Chinese restaurant",
        rating: "3 stars",
        address: "34th Street",
        type: ["chinese", "lunch", "dinner", "late night"],
        priceRange: "$5-$25",
        hours: "9am - 9pm",
        image: "1200px-Fast_Food_Restaurant_in_Malinska_im_Hafen.jpg"
    },
    {   
        id: "rest3",
        name: "Burger restaurant",
        rating: "5 stars",
        address: "Address Street",
        type: ["burgers", "lunch", "dinner", "late night", "dessert"],
        priceRange: "$10-$15",
        hours: "24 hours",
        image: "180405-fast-food-chains-in-n-out.jpg"
    },
    {
        id: "rest4",
        name: "The Restaurant that Only Sells Pizza",
        rating: "5 stars",
        address: "This Street",
        type: ["italian", "pizza", "lunch", "dinner", "late night", "vegan"],
        priceRange: "$15-$25",
        hours: "24 hours",
        image: "pizzarest.jpg"
    }
]

function navMenu(restId) {
    isClicked = true;
    window.location.href = "../Menu/Menu.html" + '#' + restId;      
}

function loadStorage() {
    var request = localStorage.getItem('search').toLowerCase();
    var filteredRests = [];
    
    if(request == "") {
        loadElements(restaurants);
    } else {
        restaurants.forEach(restaurant => {
            if(restaurant.type.includes(request)){
                filteredRests.push(restaurant);
            }
        });
        loadElements(filteredRests);
    }
    localStorage.setItem('search', "");
}

function loadElements(filteredRests) {
    var restSections = document.getElementById("restaurants");

    if(filteredRests.length < 1){
        restSections.innerHTML = "No search results found."
    } else {
        filteredRests.forEach(restaurant => {
            var rest = document.createElement('div');
            rest.setAttribute('class', 'restaurant');
            rest.setAttribute('id', restaurant.id);
        
            var image = document.createElement('img');
            image.setAttribute('class', 'rest-image');
            image.setAttribute('src', restaurant.image);
            
            var name = document.createElement('div');
            name.setAttribute('class', 'rest-name');
            name.innerHTML = restaurant.name;

            var rating = document.createElement('div');
            rating.setAttribute('class', 'rest-rating');
            rating.innerHTML = restaurant.rating;

            var address = document.createElement('div');
            address.setAttribute('class', 'rest-address');
            address.innerHTML = restaurant.address;
            
            var priceRange = document.createElement('div');
            priceRange.setAttribute('class', 'rest-pricerange');
            priceRange.innerHTML = restaurant.priceRange;

            var hours = document.createElement('div');
            hours.setAttribute('class', 'rest-hours');
            hours.innerHTML = restaurant.hours;

            rest.appendChild(image);
            rest.appendChild(name);
            rest.appendChild(rating);
            rest.appendChild(address);
            rest.appendChild(priceRange);
            rest.appendChild(hours);

            rest.addEventListener("click", ()=>{
                navMenu(restaurant.id);
            })

            restSections.appendChild(rest);
        })
    }
}