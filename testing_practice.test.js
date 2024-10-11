import {
  capitalize,
  reverseString,
} from'./testing_practice'

test('neil->Neil', () => {
  expect(capitalize('neil')).toBe('Neil')
})

test('test->tset', () => {
  expect(reverseString('test')).toBe('tset')
})
