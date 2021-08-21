const memoryEightGb = document.getElementById('memory-8gb');
const memorySixteenGb = document.getElementById('memory-16gb');
const storageOne = document.getElementById('storage-1');
const storageTwo = document.getElementById('storage-2');
const storageThree = document.getElementById('storage-3');
const deliveryFree = document.getElementById('delivery-free');
const deliveryPayment = document.getElementById('delivery-payment');
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementById('total-price');
const finalTotal = document.getElementById('final-total')

bestPrice.innerText = parseInt(1299);
const iMacPrice = bestPrice.innerText;

// updateTotal
function updateTotal() {
    // iMac bestPrice=$1299;
    const totalPrice = parseInt(iMacPrice) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    totalCost.innerText = parseInt(totalPrice);
    // final line total calculation
    let final = finalTotal.innerText = totalCost.innerText = parseInt(totalPrice)
}

// promocode field
document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoText = promoInput.value;
    if (promoText == 'stevekaku') {
        let promoResult = finalTotal.innerText * .2;
        let finalPromoResult = finalTotal.innerText - promoResult;

        finalTotal.innerText = finalPromoResult;
        promoInput.disable = true;
        // clear input value
        document.getElementById('promo-input').value = '';
    }
})

memoryEightGb.addEventListener('click', function () {
    const memoryOne = memoryCost.innerText = parseInt(0);
    updateTotal()

});
memorySixteenGb.addEventListener('click', function () {
    const memoryTwo = memoryCost.innerText = parseInt(180);
    updateTotal()
});
storageOne.addEventListener('click', function () {
    const storageFirst = storageCost.innerText = parseInt(0);
    updateTotal()
});
storageTwo.addEventListener('click', function () {
    const storageSecond = storageCost.innerText = parseInt(100);
    updateTotal()
});
storageThree.addEventListener('click', function () {
    const storageThird = storageCost.innerText = parseInt(180);
    updateTotal()
});
deliveryFree.addEventListener('click', function () {
    const deliveryOne = deliveryCost.innerText = parseInt(0);
    updateTotal()
});
deliveryPayment.addEventListener('click', function () {
    const deliveryTwo = deliveryCost.innerText = parseInt(20);
    updateTotal()
});





