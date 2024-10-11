export function capitalize(str) {
  const firstLetter = str.slice(0, 1)
  const restLetter = str.slice(1)
  return firstLetter.toUpperCase() + restLetter
}
