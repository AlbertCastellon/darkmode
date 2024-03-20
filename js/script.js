const circle = document.querySelector('.circle')
const slider = document.querySelector('.slider')
const h1Header = document.getElementById('h1-header')
const h1Main = document.getElementById('h1-main')
const body = document.querySelector('body')
slider.addEventListener('click', () => {
    if (circle.classList.contains('luna')){
        circle.innerHTML = ''
        const img = document.createElement('img')
        img.src = './assets/img/sol.png'
        circle.appendChild(img)
        circle.classList.remove('luna')
        h1Header.classList.remove('dark')
        h1Main.classList.remove('dark')
        body.classList.remove('dark')
    }else {
        circle.innerHTML = ''
        const img = document.createElement('img')
        img.src = './assets/img/luna.png'
        circle.appendChild(img)
        circle.classList.add('luna')
        h1Header.classList.add('dark')
        h1Main.classList.add('dark')
        body.classList.add('dark')
    }
    console.log(h1)
    console.log(body)
})