const fila = []
const input = document.querySelector('input[name = "value"]')
const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove')
const card = document.querySelector('.card')

addBtn.onclick = () => {
    fila.push(input.value)
    if (document.querySelector('.container')) {
        card.removeChild(document.querySelector('.container'))
        render(fila)
    }
    render(fila)
}

function render(arr) {
    const container = document.createElement('div')
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
    p.className = 'center'
    p.innerText = fila.join('\n')
}
