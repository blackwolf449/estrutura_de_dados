const fila = []
const input = document.querySelector('input[name = "value"]')
const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove')
const card = document.querySelector('.card')
let secondTime = false

addBtn.onclick = () => {
    fila.push(input.value)
    render()
}

removeBtn.onclick = () => {
    fila.shift()
    render()
}

function render() {
    const container = document.createElement('div')
    if (secondTime) {
        const p = document.querySelector('.values')
        p.innerText = fila.join('\n')
    } else {
        card.append(container)
        container.className = 'container card column'
        container.style.width = '300px'
        container.style.margin = '0 auto'
        container.style.width = '300px'

        const h1 = document.createElement('h1')
        container.append(h1)
        h1.innerText = 'Fila:'
        h1.className = 'center'

        const p = document.createElement('p')
        container.append(p)
        p.className = 'center values'
        p.innerText = fila.join('\n')
        secondTime = true
    }
}
