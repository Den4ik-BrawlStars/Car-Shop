const login = document.querySelector('.login')
const password = document.querySelector('.password')
const signUp = document.querySelector('.login-button')
const alertdiv = document.querySelector('.alert')
signUp.addEventListener('click',function add(){
    if (login.value == users[0].login && password.value == users[0].password){
        window.localStorage.setItem("user", login.value)
        window.location.href = "./index.html"
    }
    else{
        alertdiv.style.transition = '1s'
        alertdiv.style.opacity = 1
        setTimeout("alertdiv.style.opacity = 0", 2000)
    }
})
