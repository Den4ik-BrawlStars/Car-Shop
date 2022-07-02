const username = document.querySelector('.welcome-username')
if (window.localStorage.getItem("user") != undefined){
    username.innerText = window.localStorage.getItem("user")
}
else{
    username.innerText = "Пользователь"
}