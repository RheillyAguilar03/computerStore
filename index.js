
const menuButton = document.querySelector('.menu-button')
const exitButton = document.querySelector('.exit-button')
const textLinks = document.querySelector('.text-links')


menuButton.onclick = () => {
    textLinks.classList.add('show')
    menuButton.classList.add('hide')
}

exitButton.onclick = () => {
    textLinks.classList.remove('show')
    menuButton.classList.remove('hide')
}


const arrivalButton = document.querySelector('.arrival-button')
const bestsellerButton = document.querySelector('.bestseller-button')
const bestSeller = document.querySelector('.best-seller')
const newArrival = document.querySelector('.new-arrival')
const textPoint = document.querySelector('.text-point')

arrivalButton.onclick = () => {
    newArrival.classList.add('appear')
    bestSeller.classList.add('conceal')
    arrivalButton.classList.add('active')

    textPoint.innerHTML = "New Arrival"
}

bestsellerButton.onclick = () => {
    newArrival.classList.remove('appear')
    bestSeller.classList.remove('conceal')
    arrivalButton.classList.remove('active')
    textPoint.innerHTML = "Trending Product"
}



window.addEventListener("load", () => {

    const loader = document.querySelector('.loader')

    loader.classList.add('loader-hidden')
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader)
    }) 

})


const stickNav = document.querySelector('.navigation-bar') 

window.onscroll = () => {
    this.scrollY > 20 ? stickNav.classList.add('sticky') : stickNav.classList.remove('sticky')
}