const arr = [1, 2, 3, 4]

const flattener = (arr) => {
  return arr
}

// console.log(flattener(arr))

if (typeof window === 'undefined') {
  module.exports = flattener
}
