const filaBtn = document.querySelector('.fila')
const homeBtn = document.querySelector('.home')
const pilhaBtn = document.querySelector('.pilha')
const arvoreBtn = document.querySelector('.arvore')
const hashBtn = document.querySelector('.hash')
const iframe = document.querySelector('iframe')

filaBtn.onclick = () => {
    iframe.src = './pages/fila.html'
}

homeBtn.onclick = () => {
    iframe.src = './pages/welcome.html'
}

pilhaBtn.onclick = () => {
    iframe.src = './pages/pilha.html'
}

hashBtn.onclick = () => {
    iframe.src = './pages/hash.html'
}

arvoreBtn.onclick = () => {
    iframe.src = './pages/arvore.html'
}
