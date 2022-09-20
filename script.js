const filaBtn = document.querySelector('.fila')
const homeBtn = document.querySelector('.home')
const iframe = document.querySelector('iframe')

filaBtn.onclick = () => {
    iframe.src = './pages/fila.html'
}

homeBtn.onclick = () => {
    iframe.src = './pages/welcome.html'
}
