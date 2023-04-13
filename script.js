let img = document.querySelector('.apple-img')
let color_phone = document.querySelectorAll('[data-color')
let colorr = document.querySelector('.color')

let iphone_images = {
    "purple": "./assest/icons/purple.jfif",
    "gold": "./assest/icons/gold.jfif",
    "silver": "./assest/icons/silver.jfif",
    "black": "./assest/icons/black.jfif",
}

color_phone.forEach(color => {
    color.onmouseenter = () => {
        let key = color.getAttribute('data-color')

        img.style.backgroundImage = `url(${iphone_images[key]})`
        img.style.transition = '.6s ease'

        console.log(img.style.backgroundImg = `url(${iphone_images[key]})`);
        colorr.innerHTML = `color-${key}`

    }
})

let iPro = document.querySelectorAll('.i-pro')
let down = document.querySelectorAll('.down img')

iPro.forEach(elem => {
    elem.onclick = () => {
        arrow(elem)
        elem.onclick = () => {
            up(elem)
        }
    }
})

function arrow(elem) {
    elem.style.height = '100%'
    down.forEach(i => {
        i.setAttribute('src', './assest/img/arrow-up (6).svg')
    })
}

function up(elem) {
    elem.style.height = '60px'
    down.forEach(i => {
        i.setAttribute('src', './assest/img/apple_logo_files/arrow-down.svg')
    })
}

let url = document.querySelector('#bluee')
let modal = document.querySelector('.modal')
let closes = document.querySelector('.border')
let main = document.querySelector('main')
let header = document.querySelector('header')
let prices = document.querySelector('.prices')


url.onclick = () => {
    modal.style.display = 'block'
    main.style.opacity = '0.1'
    header.style.opacity = '0.1'
    prices.style.opacity = '0.1'
    closes.onclick = () => {
        modal.style.display = 'none'
        main.style.opacity = '1'
        header.style.opacity = '1'
        prices.style.opacity = '1'
    }
}


let menu = document.querySelector('.menu')
let men = document.querySelector('#menu')
let closeMenu = document.querySelector('.menu img')

men.onclick = () => {
    menu.style.marginLeft = '75%'
    menu.style.transition = '1.5s ease'
    closeMenu.onclick = () => {
        menu.style.marginLeft = '150%'
    }
}
