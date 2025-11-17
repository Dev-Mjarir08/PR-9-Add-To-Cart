import header from "../utils/utils.js"



let cartProduct = document.querySelector('#viewCart');
let cartMsg = document.getElementById('cartMsg')
let cartData = JSON.parse(localStorage.getItem("cartData")) || []
let cartTotal = document.querySelector('#cartTotal');


const displayData = () => {
  cartProduct.innerHTML = "";
    cartMsg.innerHTML = ""

      if (cartData.length === 0) {
        document.getElementById("totalCol").style.display = "none";
    cartMsg.innerHTML = `
        <div class="card-text ">
        <h3 class="text-center  mt-5 text-muted card-msg">Your Cart is Empty</h3>
        </div>
    `;
    return;
  }

    cartData.forEach((product) => {
        const { ProductUrl, ProductName, ProductPrice ,id , qty} = product;

        let col = document.createElement('div')
        col.classList.add('col-md-9')
        col.innerHTML = `
            <div class = "border border-1 p-4 mb-5 rounded shadow">
                <div class="cart-content d-flex mt-5">
                <img src="${ProductUrl}" alt="${ProductName}" class="me-3" width="120px" height="120px">

                <p class="fw-semibold me-3">${ProductName}</p>
                <p class="fw-semibold me-3">₹${ProductPrice}</p>
              </div>
              <div class="btns d-flex justify-content-center align-items-center mb-5">              
              <button class="btn btn-outline-primary me-2 fs-5 py-1 px-3" onclick ="decrease(${id})">-</button>
              <span>${qty}</span>
              <button class="btn btn-outline-primary ms-2 fs-5 py-1 px-3" onclick ="increase(${id})">+</button>
              </div>
              <button class="btn btn-outline-danger" onclick = "removeItem(${id})";>Remove Product</button>
            </div>
            
            
             
        `
        cartProduct.appendChild(col)
    })
    calculateProductTotal()
}


const calculateProductTotal = () =>{
  
    let totalItems = 0;
  let totalPrice = 0;

  cartData.forEach((product) => {
    totalItems += product.qty;
    totalPrice += product.qty * product.ProductPrice;
  });

  cartTotal.innerHTML = `
    <p>Total Items: <span class="text-primary">${totalItems}</span></p>
    <p>Subtotal: <span class="text-success">₹${totalPrice}</span></p>
  `;
}



const increase = (id) => {
  let index = cartData.findIndex((val) => val.id == id);
  if (index !== -1) {
    cartData[index].qty++;
  }
  localStorage.setItem("cartData", JSON.stringify(cartData));
  displayData();
};

const decrease = (id) => {
    let index = cartData.findIndex(val => val.id == id)

  if (index !== -1 && cartData[index].qty > 1) {
    cartData[index].qty--;
}
    localStorage.setItem("cartData", JSON.stringify(cartData))
    displayData();
}

const removeItem = (id) => {
    cartData = cartData.filter(val => val.id != id);
    localStorage.setItem("cartData", JSON.stringify(cartData))
    displayData();
}
window.removeItem = removeItem;


window.increase = increase;
window.decrease = decrease;

displayData();