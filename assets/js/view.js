import header from "../utils/utils.js"

let productTbl = document.querySelector('#productTbl tbody');

let products = JSON.parse(localStorage.getItem("products")) || []

const displayData = () => {
    productTbl.innerHTML = ""

    products.forEach((product, index) => {
        const { ProductUrl, ProductName, ProductPrice, ProductDescription, id } = product;

        let row = document.createElement('tr')
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
            <img src="${ProductUrl}" alt="${ProductName}" width="50" height="50"/>
            </td>
            <td>${ProductName}</td>
            <td>${ProductPrice}</td>
            <td>${ProductDescription}</td>
             <td>
                <button class="btn btn-outline-warning" onclick ="editProduct(${id})";>Edit</button>
                <button class="btn btn-outline-danger" onclick ="deleteProduct(${id})";>Delete</button>
            </td>
        `
        productTbl.appendChild(row)

    })
}
displayData();


const deleteProduct = (id) =>{
    products = products.filter((val)=>val.id != id);
    localStorage.setItem('products', JSON.stringify(products))

displayData();
}

const editProduct = (id) => {
   let data = products.find((val) => val.id == id)
    localStorage.setItem('editProduct', JSON.stringify(data))
    window.location.href ='editProduct.html'
}

window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
