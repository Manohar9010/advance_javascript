let arr=[1,5,9,4,2,6,7,8,3]
 arr.sort()
 console.log(arr);

 let show= arr.findIndex((e)=>{
    return e===2
 })
 console.log(show);

 let soo=[1,20,5,30,4]
 let show1= soo.sort(function(a,b){
    return a-b
 })
 console.log(show1);



//  let icon=[1,2,3,4,5,6]
//  let x = icon.toSpliced(2,2);
//  console.log("x :",x );
//  console.log(icon);