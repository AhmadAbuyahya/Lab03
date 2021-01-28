var product = prompt("Would you like to buy a phone or a laptop?");

while (product !== "phone" && product !== "laptop") {
    product = prompt("Would you like to buy a phone or a laptop?");
}

var image = ''
if(product==="phone"){
image='<img src = "images/phone.png"/>';
}
else if(product==="laptop"){
    image='<img src="images/laptop.png"/>';
}
var number=prompt("How many would you like to order?")
var result='';

for (var i=0; i<number;i++){
    result=result+image
}
document.write(result);