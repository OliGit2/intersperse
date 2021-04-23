import type from 'type-detect'

const intersperse = (array, greeting) => {
  if (!Array.isArray(array)) {
    throw TypeError(`i can't work with ${type}`)
  }

  return array.reduce((accumulator, currentvalue, index, arr) => {
    return [...accumulator, currentvalue, ...(index + 1 === arr.length ? [] : [greeting])]
  }, [])
}

export { intersperse }
