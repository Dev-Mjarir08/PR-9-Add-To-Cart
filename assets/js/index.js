import header from "../utils/utils.js"

let productTbl = document.querySelector('#viewCard');

let products = JSON.parse(localStorage.getItem("products")) || []

const displayData = () => {
    productTbl.innerHTML = ""

    products.forEach((product) => {
        const { ProductUrl, ProductName, ProductPrice, ProductDescription,id} = product;

        let col = document.createElement('div')
        col.classList.add('col-md-4')
        col.innerHTML = `
            <div class="card shadow rounded-2 mb-5" >
                <img src="${ProductUrl}"
                class="card-img-top" alt="${ProductName}">
                <div class="card-body p-3">
                    <h5 class="card-title mt-3">${ProductName}</h5>
                    <p class="card-title mt-3"> MRP:₹ <sapn class="fw-semibold" >${ProductPrice}</span></p>
                    <p class="card-text mt-3">${ProductDescription}</p>
                    <button class="btn btn-outline-primary d-block mx-auto col-4 " onclick ="handleCart(${id})";>add to cart</button>
                </div>
            </div>
            
        `
        productTbl.appendChild(col)
    })
}

displayData();

let cartData = JSON.parse(localStorage.getItem("cartData")) || []

const handleCart = (id) =>{
  let product= products.find(val=> val.id == id)

  let isAvailable = cartData.findIndex(val => val.id == product.id)
  if (isAvailable != -1){
    cartData[isAvailable].qty++
    alert("the product is already exist in cart")
  }
  else{
    product.qty=1;
    cartData.push(product);
    alert("product is saved in Cart")
  }

  localStorage.setItem("cartData", JSON.stringify(cartData));
}

window.handleCart = handleCart; 