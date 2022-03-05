let hamburger = document.querySelector('.hamburger')
let navModel = document.querySelector('.nav-model')

console.log(hamburger)

hamburger.addEventListener('click', (e) => {
    e.preventDefault()
    navModel.classList.toggle('visible-model')
    navModel.style.transition = 'ease-in-out 0.2s'
})