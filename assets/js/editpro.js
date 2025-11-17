import header from "../utils/utils.js"


let inputs = document.querySelectorAll('#products input')
const form = document.querySelector('#products');
let products = JSON.parse(localStorage.getItem("products")) || []
let data = JSON.parse(localStorage.getItem('editProduct')) || {}

inputs.forEach((input) => {
      
    input.value = data[input.name];
    
})

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        let { name, value } = e.target;
        data = { ...data, [name]: value }

    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
   products = products.map((value) =>{
        if (value.id == data.id) {
            return data;
        }
        return value;
   })
   localStorage.setItem('products', JSON.stringify(products));
       window.location.href = 'viewProduct.html';
})