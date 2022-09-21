class Hash {
    constructor() {
        this.table = {}
    }
    add(arrKeys, arrValues) {
        for (let i = 0; i < arrKeys.length; i++) {
            if (this.table[arrKeys[i]])
                return alert('Essa chave já está sendo usada')
            this.table[arrKeys[i]] = arrValues[i]
        }
    }
    change(key, value) {
        if (!this.table[key]) return alert('Essa chave não foi criada')
        this.table[key] = value
    }
    get(key) {
        return this.table[key]
    }
    getAll() {
        return this.table
    }
}

let hash = new Hash()
const inputKey = document.querySelector('input[name = "key"]')
const input = document.querySelector('input[name = "value"]')
const addBtn = document.querySelector('.add')
const card = document.querySelector('.card')
let secondTime = false

addBtn.onclick = () => {
    hash.add(inputKey.value.split(' '), input.value.split(' '))
    render()
}

function render() {
    const container = document.createElement('div')
    if (secondTime) {
        let text = ''
        const p = document.querySelector('.values')
        for (i in hash.table) {
            text = text + '\nChave: ' + i + ' Valor: ' + hash.table[i]
        }
        p.innerText = text
    } else {
        card.append(container)
        container.className = 'container card column'
        container.style.width = '300px'
        container.style.margin = '0 auto'
        container.style.width = '300px'

        const h1 = document.createElement('h1')
        container.append(h1)
        h1.innerText = 'Hash:'
        h1.className = 'center'

        const p = document.createElement('p')
        container.append(p)
        p.className = 'center values'
        let text = ''
        for (i in hash.table) {
            text = text + '\nChave:' + i + ' Valor:' + hash.table[i]
        }
        p.innerText = text
        secondTime = true
    }
}
