// var n = 1278231.4567;
// var str = n.toLocaleString();

// console.log(str);


const unitPriceIphone = 1219;



var idBtnMinus1 = "btn-minus-1";
var idBtnPlus1 = "btn-plus-1";
var idTxtInput1 = "input-txt-1";
var idPriceItem1 = "price-item-1";



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


// update each product total price UNCHECKED
function updateItemPrice (id,totalPrice) {
    var element = getElement(id);

    element.innerHTML = totalPrice;
}



// ---------------------------------------

// item-1 minus clicked
getElement(idBtnMinus1).addEventListener('click', function () {

    var quantity = getTxtInput(idTxtInput1);
    quantity--;

    if (quantity < 0) {
        alert("Can't place an order below 0.");
        return;
    }

    updateItemAmount(idTxtInput1, quantity);
    updateItemPrice(idPriceItem1,(unitPriceIphone*quantity));

});



// item-1 plus clicked
getElement(idBtnPlus1).addEventListener('click', function () {

    var quantity = getTxtInput(idTxtInput1);
    quantity++;

    updateItemAmount(idTxtInput1, quantity);
    updateItemPrice(idPriceItem1,(unitPriceIphone*quantity));


});

