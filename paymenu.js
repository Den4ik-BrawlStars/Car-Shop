let total = 0
const totaldiv = document.querySelector('.total')
const itemsdiv = document.querySelector('.item-list')
let itemslist = JSON.parse(localStorage.getItem('items'))
itemslist.forEach(i => {
    if (i == 0){
        let image = "rolls-royce-img"
        let name = "Rolls-Royce"
        let price = "500 тенге"
        createItem(image, name, price)
        total+=Number(price.substr(0,3))
        console.log(total);
    }
    else if (i == 1){
        let image = "tesla-img"
        let name = "Tesla"
        let price = "750 тенге"
        createItem(image, name, price)
        total+=Number(price.substr(0,3))
        console.log(total);
    }
    else {
        let image = "jiguli-img"
        let name = "Жигуль"
        let price = "230 тенге"
        createItem(image, name, price)
        total+=Number(price.substr(0,3))
        console.log(total);
    }
})
function createItem(image, name, price){
    let item = document.createElement('div')
    item.classList.add("item")
    let imgdiv = document.createElement('div')
    imgdiv.classList.add("imgdiv")
    let namediv = document.createElement('div')
    namediv.innerText = name
    namediv.classList.add('name-text')
    imgdiv.classList.add(image)
    let pricediv = document.createElement('div')
    pricediv.innerText = price
    pricediv.classList.add('name-text')
    itemsdiv.appendChild(item)
    item.appendChild(imgdiv)
    item.appendChild(namediv)
    item.appendChild(pricediv)
}
totaldiv.innerText = ("Итого: " + total)