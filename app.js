let donuts = 0;
let donutsPerClick = 1;
let donutsPerSecond = 0;

let ovenCost = 10;
let bakerCost = 50;
let truckCost = 200;
let storeCost = 500;

let ovens = 0;
let bakers = 0;
let trucks = 0;
let stores = 0;

function updateDonutCounter() {
    document.getElementById('showDonuts').textContent = donuts;
    document.getElementById('showDonutsPerSecond').textContent = donutsPerSecond;
    document.getElementById('showDonutsPerClick').textContent = donutsPerClick;
}

function increment() {
    donuts += donutsPerClick;
    updateDonutCounter();
}

// Add this function to increment the cost of an item by 10%
function increaseCost(cost) {
    return Math.round(cost * 1.10);
}

// Modify the buyOven() function
function buyOven() {
    if (donuts >= ovenCost) {
        donuts -= ovenCost;
        ovens++;
        donutsPerSecond += 1;
        ovenCost = increaseCost(ovenCost); // Increase cost by 10%
        updateDonutCounter();
        updateItemStats();
    } else {
        alert("Not enough donuts to buy an oven!");
    }
}

// Modify the buyBaker() function
function buyBaker() {
    if (donuts >= bakerCost) {
        donuts -= bakerCost;
        bakers++;
        donutsPerClick += 10;
        bakerCost = increaseCost(bakerCost); // Increase cost by 10%
        updateDonutCounter();
        updateItemStats();
    } else {
        alert("Not enough donuts to buy a baker!");
    }
}

// Modify the buyTruck() function
function buyTruck() {
    if (donuts >= truckCost) {
        donuts -= truckCost;
        trucks++;
        donutsPerSecond += 100;
        truckCost = increaseCost(truckCost); // Increase cost by 10%
        updateDonutCounter();
        updateItemStats();
    } else {
        alert("Not enough donuts to buy a truck!");
    }
}

// Modify the buyStores() function
function buyStores() {
    if (donuts >= storeCost) {
        donuts -= storeCost;
        stores++;
        donutsPerClick += 500;
        storeCost = increaseCost(storeCost); // Increase cost by 10%
        updateDonutCounter();
        updateItemStats();
    } else {
        alert("Not enough donuts to buy a store!");
    }
}


function updateItemStats() {
    document.getElementById('ovenNum').textContent = ovens;
    document.getElementById('ovenCost').textContent = ovenCost;
    document.getElementById('bakerNum').textContent = bakers;
    document.getElementById('bakerCost').textContent = bakerCost;
    document.getElementById('truckNum').textContent = trucks;
    document.getElementById('truckCost').textContent = truckCost;
    document.getElementById('storeNum').textContent = stores;
    document.getElementById('storeCost').textContent = storeCost;
}

setInterval(function() {
    donuts += donutsPerSecond;
    updateDonutCounter();
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const popupLinks = document.querySelectorAll('.popup-link');

    popupLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(`popup-${popupId}`);
            popup.style.display = 'flex';
        });
    });

    const closePopupButtons = document.querySelectorAll('.close-popup');

    closePopupButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(`popup-${popupId}`);
            popup.style.display = 'none';
        });
    });
});