// What are all of the words containing UU?
function solveQuestion1() {
  let result = []

  for (const word of wordBank) {
    let last = ""
    for (const character of word) {
      if (character == "U" && last == "U") {
        result.push(word)
      }
      last = character
    }
  }

  return result
}

console.log("Solve question 1")
console.log(solveQuestion1())
