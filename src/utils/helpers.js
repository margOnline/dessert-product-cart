export const toCamelCase = (string) => {
  return string
    .split(' ')
    .map((word, idx) => {
      return idx === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}
