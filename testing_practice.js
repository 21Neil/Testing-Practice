export function capitalize(str) {
  const firstLetter = str.slice(0, 1)
  const restLetter = str.slice(1)
  return firstLetter.toUpperCase() + restLetter
}

export function reverseString(str) {
  const arr = str.split('')
  return arr.reverse().join('')
}

export const calculator = (function () {
  const add = (num1, num2) => num1 + num2
  const subtract = (num1, num2) => num1 - num2
  const divide = (num1, num2) => num1 / num2
  const multiply = (num1, num2) => num1 * num2
  return {
    add,
    subtract,
    divide,
    multiply,
  } 
})()
