// Toggle class active 
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

});

//let cart = 0;

//document.querySelectorAll(".btn-cart").forEach(button => {
   // button.addEventListener("click", () => {
   //     cart++;
    //    document.getElementById("cart-count").textContent = cart;
   // });
//});

let cart = [];

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".btn-cart").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        cart.push({name, price});

        updateCart();

    });

});

function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        const li = document.createElement("li");

        li.innerHTML = `
        ${item.name} - Rp ${item.price}
        <button onclick="removeItem(${index})">Hapus</button>
        `;

        cartItems.appendChild(li);

    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toLocaleString("id-ID");

}

function removeItem(index){

    cart.splice(index,1);
    updateCart();

}