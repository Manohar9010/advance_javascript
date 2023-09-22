let arr=[1,2,3,4,5,6,7,8,9];

let abc=   arr.forEach((e,i)=>{
    console.log(i+=e);
    return 
})

console.log("abc",abc);

function sum(...args) {
    var total = 0;
    args.forEach(arg => {
      total += arg;
    });
    console.log(total);
  }
  
  sum(1, 3);