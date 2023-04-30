let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    evenNumbers.push(originalArray[i]);
  } else {
    oddNumbers.push(originalArray[i]);
  }
}

console.log("Original array: " + originalArray);
console.log("Even numbers: " + evenNumbers);
console.log("Odd numbers: " + oddNumbers);
