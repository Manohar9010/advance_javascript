// let arr=[1,"string",true,{name:"rama",},()=>{
//     console.log("hello");
// },];


// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[3].name);
// console.log(arr[4]);
// arr()
// let x=arr()
// console.log(x);
 let num=[1,2,3,4,5,6,7]
 console.log(num);
  num.push(10)
  console.log(num);
  num.push("shivam")
  console.log(num);
  num.pop(10)
  console.log(num);
  num.shift(1)
  console.log(num);
  num.unshift(4)
  console.log(num);

  let arr=["a","b","c"]
 let x= arr.concat(num)
 console.log(x);

 let use =arr.indexOf("b")
 console.log(use);
 let joo=arr.indexOf("koo")
 console.log(joo);
let moo=[1,5,6,8,4,2,5,7]
let opp=moo.lastIndexOf(5)
console.log(opp);

console.log("--------------------------------------------------------------------------------");
let y=[1,2,3,4,5,6,7]
let reu= y.reduce((latstr,e)=>{
    console.log("laststr:",latstr);
    console.log("e:",e);
    return latstr+e
})
console.log(reu);

 

