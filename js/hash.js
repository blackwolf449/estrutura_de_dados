const hash = []
const input = document.querySelector('input[name = "value"]')
const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove')
const card = document.querySelector('.card')
let secondTime = false

addBtn.onclick = () => {
    const token = getToken(pilha.length)
    pilha.push([input.ariaValueMax, token])
    render()
}

removeBtn.onclick = () => {
    pilha.pop()
    render()
}

function getToken(min, max, id) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) + id
}

function render() {
    const container = document.createElement('div')
    if (secondTime) {
        const p = document.querySelector('.values')
        p.innerText = pilha.join('\n')
    } else {
        card.append(container)
        container.className = 'container card column'
        container.style.width = '300px'
        container.style.margin = '0 auto'
        container.style.width = '300px'

        const h1 = document.createElement('h1')
        container.append(h1)
        h1.innerText = 'Pilha:'
        h1.className = 'center'

        const p = document.createElement('p')
        container.append(p)
        p.className = 'center values'
        p.innerText = pilha.join('\n')
        secondTime = true
    }
}
