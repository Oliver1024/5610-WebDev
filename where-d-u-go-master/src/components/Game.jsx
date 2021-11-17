export class Game {
    boatPosition = [1, 7]
    observers = []
    observe(o) {
        this.observers.push(o)
        const pos = this.boatPosition
        this.observers.forEach((o) => o && o(pos))
        return () => {
            this.observers = this.observers.filter((t) => t !== o)
        }
    }
    moveBoat(toX, toY) {
        this.boatPosition = [toX, toY]
        this.observers.forEach((o) => o && o(this.boatPosition))
        console.log(this.observers)
    }
    canMoveBoat(toX, toY) {
        const [x, y] = this.boatPosition
        const dx = toX - x
        const dy = toY - y
        return (
            (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2)
        )
    }
}

export class Game2 {
    boatPosition = [3, 7]
    observers = []
    name = [0, 1]
    observe(o) {
        this.observers.push(o)
        const pos = this.boatPosition
        this.observers.forEach((o) => o && o(pos))
        return () => {
            this.observers = this.observers.filter((t) => t !== o)
        }
    }
    moveBoat(toX, toY) {
        this.boatPosition = [toX, toY]
        this.observers.forEach((o) => o && o(this.boatPosition))
        console.log(this.observers)
    }
    canMoveBoat(toX, toY, name) {
        const [x, y] = this.boatPosition
        const dx = toX - x
        const dy = toY - y
        let out = (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2)
        out = name === 0 ? out : (Math.abs(dx) === 3 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 3)
        return (
            out
        )
    }
    emitChange() {

    }
}

