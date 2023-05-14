
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