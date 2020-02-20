// export function tetrisShapes(shape) {
//     if (shape === 'T') {
//         return [
//             [1, 1, 1],
//             [0, 1, 0],
//             [0, 0, 0],
//         ];
//     } else if (shape === 'I') {
//         return [
//             [0, 0, 2, 0],
//             [0, 0, 2, 0],
//             [0, 0, 2, 0],
//             [0, 0, 2, 0],
//         ];
//     } else if (shape === 'O') {
//         return [
//             [3, 3],
//             [3, 3],
//         ];
//     } else if (shape === 'J') {
//         return [
//             [4, 0, 0],
//             [4, 4, 4],
//             [0, 0, 0],
//         ];
//     } else if (shape === 'L') {
//         return [
//             [0, 0, 5],
//             [5, 5, 5],
//             [0, 0, 0],
//         ];
//     } else if (shape === 'Z') {
//         return [
//             [6, 6, 0],
//             [0, 6, 6],
//             [0, 0, 0],
//         ];
//     } else if (shape === 'S') {
//         return [
//             [0, 7, 7],
//             [7, 7, 0],
//             [0, 0, 0],
//         ];
//     }
// }

export function tetrisShapes(shape) {
  if (shape === "T") {
    return [
    //   [0, 0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ];
  } else if (shape === "I") {
    return [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0]
    ];
  } else if (shape === "O") {
    return [
    //   [0, 0, 0, 0],
      [3, 3],
      [3, 3],
    ];
  } else if (shape === "J") {
    return [
    //   [0, 0, 0, 0],
      [4, 0, 0],
      [4, 4, 4],
      [0, 0, 0]
    ];
  } else if (shape === "L") {
    return [
    //   [0, 0, 0, 0],
      [0, 0, 5],
      [5, 5, 5],
      [0, 0, 0]
    ];
  } else if (shape === "Z") {
    return [
    //   [0, 0, 0, 0],
      [6, 6, 0],
      [0, 6, 6],
      [0, 0, 0]
    ];
  } else if (shape === "S") {
    return [
    //   [0, 0, 0, 0],  
      [0, 7, 7],
      [7, 7, 0],
      [0, 0, 0]
    ];
  }
}
