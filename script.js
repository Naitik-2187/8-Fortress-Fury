let cart = JSON.parse(localStorage.getItem("FortressFuryCartArrKey")) || [];

function addtocart(name, price) {
    cart.push({ name, price });
    console.log(cart);
    localStorage.setItem("FortressFuryCartArrKey", JSON.stringify(cart));
}

function clearcart() {
    localStorage.clear("FortressFuryCartArrKey");
    cart = [];
}