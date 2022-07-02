const paybutton = document.querySelector('.pay-button')
const totalvv = document.querySelector('.total')
paybutton.addEventListener("click", function add(){
    localStorage.clear()
    totaldiv.innerText = "Оплачено"
})