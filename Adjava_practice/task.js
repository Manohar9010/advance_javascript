// sum of elements with for each loop

let arr=[1,2,3,4,5,6]
let sum=0;
arr.forEach(e=> sum += e);
console.log(sum);

//  sum with map
let arr3=[1,2,3,4,5,6];
let sum1=arr.map((a,b)=>{
    return a+b
})
console.log("sum:", sum1)

// sum with reducer

let arr4=[1,2,3,4,5,6]

let show4=arr.reduce((last,e)=>{

    return last+e
},0)
console.log(show4);



// add * with element use of jion


let arr1=[1,2,3,4,5]

let star= arr.join("*")
console.log(star);


// add 5 to elements with map

let arr2=[1,2,3,4,5]

let add= arr2.map((e,i)=>{
    return e+5
})
console.log ("add", add)


