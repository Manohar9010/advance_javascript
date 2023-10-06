let arr=["a","b","c","d","e",1,2,3,4]
 
// arr.splice(1,4)
// console.log(arr);
// remoove


// arr.splice(2,0,"hello")
// console.log(arr);
// adding

arr.splice(2,3,"test")
console.log(arr);
// remove and adding


// Creating an array
let originalArr = ["c", "cpp", "java",
	"python", "javascript", "kotlin"];

// Creating the clone of the array
let cloneArr = originalArr.slice(0);

// Or you can use spread Operator
// let cloneArr = [...originalArr]

// Extract the array using splice method
let extractedArr = cloneArr.splice(0, 4);

// Printing the Extracted array
console.log("Extracted Array");
console.log(extractedArr);

// Printing the original Array
console.log("Original Array");
console.log(originalArr);

// let OFsplice=[1,2,3,4,5,6]

// let show= OFsplice.toSplice();
//  console.log(show);

