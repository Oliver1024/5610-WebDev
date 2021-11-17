
export class Containers {
    positions = {
        sheep: [0, 0],
        pig: [0, 1],
        pig2: [0, 4],
        cow: [0, 2],
        chicken: [4, 0]
    }

    movePosition(name, toX, toY) {
        this.positions[name] = [toX, toY]
    }
}