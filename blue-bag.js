let itemsnumber = 0
let itemslist = []
const ordereditemsdiv = document.querySelector('.ordered-items-number')
const ordereditemsvalue = document.querySelector('.ordered-items-number-value')
const buttons = document.querySelectorAll('.order-button')
console.log(buttons);
buttons.forEach(i => {
    i.addEventListener('click', function add(event){
        ordereditemsdiv.classList.remove('invisible')
        itemsnumber++
        ordereditemsvalue.innerText = itemsnumber
        console.log(event);
        for(let j = 0;j<3;j++){
            if (event.target == buttons[j]) {
                itemslist.push(j)
                console.log(itemslist);
                localStorage.setItem("items", JSON.stringify(itemslist))
            }
        }
    })
})