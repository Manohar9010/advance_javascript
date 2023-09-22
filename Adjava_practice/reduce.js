let arr=[1,2,3,4,5]
let total= arr.reduce((lastretunvalue,e)=>{
    console.log("latvalue",lastretunvalue);
    console.log("e",e);
    return e=+5
})
console.log("total",total);
console.log(arr);