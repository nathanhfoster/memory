import { fips } from 'crypto'

const getRandomInt = (min = 0, max = Infinity - 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const shuffleArray = a => {
  let array = [...a]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}

const shallowEquals = (a, b) => {
  if (a === b) return true
  if (!(a || b)) return true
  // if ((!a && b) || (!b && a)) return false;

  for (var key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false
    }
  }

  for (var key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false
    }
  }

  return true
}

export { getRandomInt, shuffleArray, shallowEquals }
