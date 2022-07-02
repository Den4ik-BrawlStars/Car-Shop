const navigation = document.querySelector('.nav-div')
const motorcar = document.querySelector('.navigation-motorcar-div')
const links = document.querySelectorAll('.navigation-a')
navigation.style.transition = '1s'
motorcar.addEventListener('click', () => {
    navigation.classList.toggle('transformed')
})
links.forEach(i => {
    i.addEventListener('click', function add(){
        navigation.classList.add('transformed')
    })
})