

const globale = document.querySelector('#globale');
let html = "";

function newHtml(){
    let html = "";
    for(let i = 0; i< 10; i++){
        html += `<div  class="form-row wrapper container">
        <div  id="formule" class="form-group col">
            <select id="inputState" class="form-control">
                <option selected>Choisissez votre livre</option>
                <option value="1">Le grand livre de JavaScript</option>
                <option value="2">HTML encore plus vite</option>
                <option value="3">Windows NT 4.0</option>
                <option value="4">Le Kit de Ressource technique de NT</option>
                <option value="5">Formation JAVA</option>
                <option value="6">Comment créer son site Web</option>
            </select>
        </div>
        <div class="col">
            <input type="text" class="form-control">
        </div>
        <div class="col">
            <input type="number" class="form-control">
        </div>
        <div class="col">
            <input type="text" class="form-control">
        </div>
        <div class="col">
            <input type="text" class="form-control">
        </div>
    </div>`

    }
    return html;
}
html += newHtml();
globale.innerHTML = html;







const books = [
    {title: "Le grand livre de JavaScript", reference: "#101", unitPrice: 15},
    {title: "HTML encore plus vite", reference: "#102", unitPrice: 20},
    {title: "Jekyll pour les nuls", reference: "#103", unitPrice: 23.50},
    {title: "Comment créer son site Web", reference: "#104", unitPrice: 17.90},
];
let bookSelect = document.getElementById("select");
let bookReference = document.getElementById("reference");
let bookUnitPrice = document.getElementById("unit-price");
let linePrice = document.getElementById("price");
let bookQuantity = document.getElementById("quantity");

bookSelect.addEventListener('change', (event) => {
    let value = event.target.value;
    for (let book in books) {
        if (value == books[book].title) {
            bookReference.value = books[book].reference;
            bookUnitPrice.value = books[book].unitPrice;
            bookQuantity.value = 1;
            linePrice.value = bookQuantity.value * books[book].unitPrice;
        } 
    }
});

bookQuantity.addEventListener('change', (event) => {
     let value = event.target.value;
     linePrice.value = value * bookUnitPrice.value;
})