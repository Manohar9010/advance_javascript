// object methods

// let obj={name:"shivam",age:45}

// let show = object.values(obj);
// let show = Object.keys(obj)
// let show= Object.values(obj)
// let show = Object.entries(obj)
// console.log(show);
// console.log(obj);
// for (const key in obj) {
//     // if (Object.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];
        
//     // }
//     console.log("kerffefedf",key);
//     obj.key;
//     console.log("obj .key",obj [key]);

// }

// let arr=[1,2,3,4,5,6,7,8]
// let arr1=["a","b","c","d"]
//  arr.push(5)
// arr.pop()
// arr.shift()
// // arr.unshift(10)
// let show= arr.concat(arr1,"vrunda rani")
// // console.log(show);
//  let show= arr.indexOf(2)
//  let show1=arr.lastIndexOf(7)
//  let show3= arr.includes(3)
//  console.log(show);
//  console.log(show1);
//  console.log(show3);

// let show= arr.slice(2,5)
// let show=arr.splice(2,0,"shivam")
// console.log(arr);
// let show= arr.find((e,i)=>{
//     console.log(i,"------",e);
//     return e >5
// })
// console.log(show);

// let show = arr.filter((e)=>{
//     return e>4
// })
// console.log(show);

// let show =arr.findIndex((e)=>{
//     console.log("e",e);
//     return e>4
// })
// console.log(show);
// let arr5=[1,2,3,4,5,6]
// let allo=arr5.forEach((e,i)=>{
//     console.log(i,"---e==",e);
// })
// console.log("abc",allo);

// let arr6=[1,6,3,7,5]
// arr6.sort()
// console.log(arr6);
let arr=[1,2,3,4,5,6,7,8]

// node 

let sum=0;
arr.map(e=> sum += e);
console.log(sum);

