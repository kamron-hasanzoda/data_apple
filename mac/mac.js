let prices = document.querySelectorAll('.info p')
let span = document.querySelector('.price')
let start = span.innerHTML
let img = document.querySelector('img')
let types = document.querySelectorAll('#types')
let text = document.querySelector('.blue')
let btns = document.querySelectorAll('.btn-color')
let infos = document.querySelectorAll('.info')

let mac_images = {
    "White": "silver.png",
    "Space Gray": "spacegray.png"
}

prices.forEach(price => {
    price.onclick = () => {
        let key = price.getAttribute('data-price')

        span.innerHTML = +start + +key
    }
})

types.forEach(type => {
    types[0].style.backgroundColor = '#0071E3'
    types[0].style.color = 'white'
    type.onclick = () => {
        let key = type.getAttribute('data-type')
        img.setAttribute('src', mac_images[key])
        text.innerHTML = key

        btns.forEach(btn => {
            let data = btn.getAttribute('data-type')


            btns.forEach(e => {
                e.style.backgroundColor = '#CFE7FF'
                e.style.color = 'black'
            })
            type.style.backgroundColor = '#0071E3'
            type.style.color = 'white'
        })
    }
})
