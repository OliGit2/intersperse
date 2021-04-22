const intersperse = (array, greeting) => {
 // eslint-disable-next-line no-shadow
 return array.reduce((accumulator, currentvalue, index, array) => {
  return [...accumulator, currentvalue, ...(index + 1 === array.length ? [] : [greeting])]
 }, [])
}

export { intersperse }
