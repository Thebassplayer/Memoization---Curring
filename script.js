//Memoization in simply a way to remember a solution to a subproblem so you dont have to calculate it again

function addTo80(n) {
  console.log("--- Take some time")
  return n + 80
}

console.log("1: ", addTo80(5))
console.log("2: ", addTo80(5))
console.log("3: ", addTo80(5))
console.log("4: ", addTo80(5))

const cache = {}
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    console.log("--- Take some time")
    cache[n] = 80 + n
    return cache[n]
  }
}

console.log("5: ", memoizedAddTo80(5))
console.log("6: ", memoizedAddTo80(5))
console.log("7: ", memoizedAddTo80(5))
console.log("8: ", memoizedAddTo80(5))
console.log("9: ", memoizedAddTo80(5))