function countWords(string) {

  let split = string.toLowerCase().split(" ").join('').split("")
  let same1 = split.map(i => {
   return same2 = split.filter( j => j === i)
  })

  let result = same1.map(i => `${i[0].toUpperCase()} ${i.length}`)
  let sameSet = new Set(result)
  sameSet.forEach(i => console.log(i))
  //return [...sameSet]
  return null
}

countWords("Chinmay Kulkarni")