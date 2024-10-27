import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from'./testing_practice'

test('neil->Neil', () => {
  expect(capitalize('neil')).toBe('Neil')
})

test('test->tset', () => {
  expect(reverseString('test')).toBe('tset')
})

describe('calculator', () => {
  test('5 + 6', () => {
    expect(calculator.add(5, 6)).toBe(11)
  })
  test('11 - 5', () => {
    expect(calculator.subtract(11, 5)).toBe(6)
  })
  test('12 / 3', () => {
    expect(calculator.divide(12, 3)).toBe(4)
  })
  test('4 * 5', () => {
    expect(calculator.multiply(4, 5)).toBe(20)
  })
})

describe('caesarCipher', () => {
  test('abc->bcd', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
  })
  test('xyz->abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
  })
  test('HeLLo->KhOOr', () => {
    expect(caesarCipher('ZeLLo', 3)).toBe('ChOOr')
  })
  test('Hello, World!->Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
  })
})
