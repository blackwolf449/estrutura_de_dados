class Tree {
    constructor(value) {
        this.leftNode = null
        this.rightNode = null
        this.value = value
    }

    add(value) {
        if (value >= this.value) {
            if (!this.rightNode) {
                this.rightNode = new Tree(value)
                return
            }
            this.rightNode.add(value)
            return
        }
        if (!this.leftNode) {
            this.leftNode = new Tree(value)
            return
        }
        this.leftNode.add(value)
    }
}

let first = true
const addBtn = document.querySelector('.add')
const input = document.querySelector('input[name = "value"]')
let tree

addBtn.onclick = () => {
    if (first) {
        tree = new Tree(input.value)
        first = false
        console.log(tree)
        return
    }
    tree.add(input.value)
    console.log(tree)
}
