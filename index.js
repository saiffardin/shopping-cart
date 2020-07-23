// var n = 1278231.4567;
// var str = n.toLocaleString();

// console.log(str);


const unitPriceIphone = 1219;
const unitPricePhnCover = 59;


var idBtnMinus1 = "btn-minus-1";
var idBtnPlus1 = "btn-plus-1";
var idTxtInput1 = "input-txt-1";
var idPriceItem1 = "price-item-1";

var idBtnMinus2 = "btn-minus-2";
var idBtnPlus2 = "btn-plus-2";
var idTxtInput2 = "input-txt-2";
var idPriceItem2 = "price-item-2";

var idSubtotal = "subtotal";
var idTax = "tax";
var idTotal = "total";

// ---------------------------------------

function getElement(id) {
    return document.getElementById(id);
}

// update number of products 
function updateItemAmount(id, quantity) {
    var element = getElement(id);
    element.value = quantity;
}


function getTxtInput(id) {
    var element = getElement(id);
    return Number(element.value);
}


// update each product total price
function updateItemPrice (id,totalPrice) {
    var element = getElement(id);
    element.innerHTML = totalPrice;
}

function decrement(idTxtInput, idPriceItem, unitPrice) {
    var quantity = getTxtInput(idTxtInput);
    quantity--;

    if (quantity < 0) {
        alert("Can't place an order below 0.");
        return;
    }

    updateItemAmount(idTxtInput, quantity);
    updateItemPrice(idPriceItem,(unitPrice*quantity));

    updateTotalCostSection ();
}

function increment(idTxtInput, idPriceItem, unitPrice) {
    var quantity = getTxtInput(idTxtInput);
    quantity++;

    updateItemAmount(idTxtInput, quantity);
    updateItemPrice(idPriceItem,(unitPrice*quantity));

    updateTotalCostSection ();
}


function updateTotalCostSection () {
    var iPhnTotalCost = Number(getElement(idPriceItem1).innerHTML);
    var phnCoverTotalCost = Number(getElement(idPriceItem2).innerHTML);

    var subtotal = iPhnTotalCost + phnCoverTotalCost;
    var tax = Number((subtotal*0.1).toFixed(2));
    var total = subtotal+tax;

    getElement(idSubtotal).innerHTML = subtotal.toLocaleString();
    getElement(idTax).innerHTML = tax.toLocaleString();
    getElement(idTotal).innerHTML = total.toLocaleString();

    // console.log("subtotal: ",subtotal);
    // console.log("tax: ",tax);
    // console.log("total: ",total);
}


// ---------------------------------------

// item-1 minus clicked
getElement(idBtnMinus1).addEventListener('click', function () {
    decrement(idTxtInput1,idPriceItem1,unitPriceIphone);
});


// item-1 plus clicked
getElement(idBtnPlus1).addEventListener('click', function () {
    increment(idTxtInput1, idPriceItem1,unitPriceIphone);
});


// ---------------------------------------

// item-2 minus clicked
getElement(idBtnMinus2).addEventListener('click', function () {
    decrement(idTxtInput2,idPriceItem2,unitPricePhnCover);
});


// item-2 plus clicked
getElement(idBtnPlus2).addEventListener('click', function () {
    increment(idTxtInput2, idPriceItem2,unitPricePhnCover);
});

updateTotalCostSection ();
