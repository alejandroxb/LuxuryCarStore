let prevButton = document = document.getElementById('prev')
let nextButton = document = document.getElementById('next')
let container = document.querySelector ('.container')
let items = container.querySelectorAll ('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPostion = items.length - 1


function setSlider () {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')       

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}


nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPostion ? 0 : active + 1 // CODIGO FUNCIONA COMO IF
    setSlider()
    items[active].classList.add('active') 
}



prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPostion : active - 1 
    setSlider()
    items[active].classList.add('active')
}

