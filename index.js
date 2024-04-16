function hasTargetSum(array, target) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }

    }

  }
  // Write your algorithm here
  return false
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))

/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here
  Iterate over the array 
  Add the current index to each different one
  compare with the target
  return true or false
*/

/*
  Add written explanation of your solution here
  The function takes in 2 arguments, an array and another integer. So we iterate over the array with 2 for loops, so that one for loop can point to one index and another one can point to the next one, we compare if the sum is equal to our 2nd argument, if so returns true, if not return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
