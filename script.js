const shoesPrice = document.getElementById('shoesPrice');
const jeansePrice = document.getElementById('jeansePrice');
const shirtPrice = document.getElementById('shirtPrice');
const bagPrice = document.getElementById('bagPrice');

let shoesPriceValue = +shoesPrice.innerText; 
console.log(shoesPriceValue);
let jeansePriceValue = +jeansePrice.innerText; 
console.log(jeansePriceValue);
let shirtPriceValue = +shirtPrice.innerText; 
console.log(shirtPriceValue);
let bagPriceValue = +bagPrice.innerText; 
console.log(bagPriceValue);

let result = shoesPriceValue+jeansePriceValue+shirtPriceValue+bagPriceValue;
const totalPrice = document.getElementById('totalPrice');
    totalPrice.textContent = result;
    console.log(result);
    let sum = result-result*0.2;
    console.log(sum);

function discount(){
   totalPrice.textContent = result-result*0.2;
}

document.querySelector('#button').onclick = discount;


