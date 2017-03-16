const flattener = (arr) => {
  const newArr = []

  const inner = (arr2) => {
    for (let i = 0; i < arr2.length; i++) {
      if (!Array.isArray(arr2[i])) {
        newArr.push(arr2[i])
      } else {
        inner(arr2[i])
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i])
    } else {
      inner(arr[i])
    }
  }
  return newArr
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = flattener
}
