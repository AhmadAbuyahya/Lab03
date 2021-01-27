var producttype = prompt("What product would you like to purchase?");
var noProduct = prompt("How many products would you like to order?");
var discount;

if (noProduct >= 1 && noProduct < 5) { discount = "You get a 10% discount on your purchase"; }
else if (noProduct >= 5 && noProduct < 10) { discount = "You get a 20% discount on your purchase"; }
else if (noProduct >= 10) { discount = "You get a 30% discount on your purchase"; }
else { discount = "Incorrect order"; }

document.write(discount);

document.getElementById("order").textContent = producttype;
document.getElementById("products").textContent = noProduct;

confirm("Are sure you want to make this purchase?");
alert("Thank for using our shop!!");