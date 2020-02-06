export function tetrisShapes(shape) {
    if (shape === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ]
    } else if (shape === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ]
    } else if (shape = 'O') {
        return [
            [1, 1],
            [1, 1],
        ]
    } else if (shape === 'J') {
        return [
            [0, 0, 0],
            [1, 0, 0],
            [1, 1, 1],
        ]
    } else if (shape === 'L') {
        return [
            [0, 0, 0],
            [0, 0, 1],
            [1, 1, 1],
        ]
    } else if (shape === 'Z') {
        return [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1],
        ]
    } else if (shape === 'S') {
        return [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0],
        ]
    }
}