/* add product list variable. product list and product are not the same. */
/* const product = product-name, product-price, product-available-quantity, item-cart-quantity
    /* name == admin input
price = admin input + applicable tax
quantity available = admin input - purchases
quantity in cart


const most-purchased-products = product{highest-purchases}
const suggestions = most-purchased-products
const home-page-suggestions = most-purchased-products */

const correctPassword= "PANICATTHEDISCO"

if (sessionStorage.getItem('unlocked') === 'true') {
    document.getElementById('Lock-Screen').style.display= 'none';
}

document.getElementById('Password-Input').addEventListener('keydown', e =>{
    if (e.key === 'Enter') checkPassword();
})
document.getElementById('Password-Submit').addEventListener('click',checkPassword);

function checkPassword() {
    const entered = document.getElementById('Password-Input').value;
    if (entered === correctPassword) {
        document.getElementById('Lock-Screen').style.display = 'none';
        sessionStorage.setItem('unlocked', 'true');
    }
    else {
        document.getElementById('Incorrect-Password').textContent = 'Wrong password, try again fool';
    }
}
    




