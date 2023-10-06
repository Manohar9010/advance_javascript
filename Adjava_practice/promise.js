/*const h1= new Promise((resolve,rejeact)=>{
 const arr=[1,2,3,4,5]
   let exist =arr.includes(50)
   if (exist) {
       resolve("5 is avalible")
       
    }else{
        rejeact("5 is not in array")
    }
    console.log("newPromise ~ exist:", exist)
})
h1.then((res)=>{
console.log("=======>res",res);
})
.catch((error)=>{
   console.log("======>error",error);
})
*/

// synchronus working in promise

/*
const m1= new Promise((resolve,rejeact)=>{
 const arr=[1,2,3,4,5]
   let now =arr.includes(5)
//    throw new Error("====manually generated error")
   if (now) {
       resolve("5 is avalible")
       
    }else{
        rejeact("5 is not in array")
    }
    console.log("newPromise ~ exist:", now)
})
m1.then((res)=>{
console.log("=======>res",res);
return {name:"shivam",age:25}
})
.then((res1)=>{
    console.log("=====>",res1);
    return [1,2,3,4,5,6,]
})
.then((res3)=>{
    console.log("=====>res3",res3);
})
.catch((error)=>{
   console.log("======>error",error.message);
})
*/

/*const m2=new Promise((resolve,rejeact)=>{
    setTimeout(()=>{
          resolve("====resolve=====");

    },3000)
})
console.log(m2);
*/
const m1= new Promise((resolve,rejeact)=>{
    const arr=[1,2,3,4,5]
      let now =arr.includes(5)
   //    throw new Error("====manually generated error")
      if (now) {
          resolve({name:"shivam"})
          
       }else{
           rejeact("5 is not in array")
       }
       console.log("newPromise ~ exist:", now)
   })
   m1.then((res)=>{
   console.log("=======>res",res);
   return 
   })
   .then((res1)=>{
    .
    
       console.log("=====>",res1);
       return [1,2,3,4,5,6,]
   })
   .then((res3)=>{
       console.log("=====>res3",res3);
   })
   .catch((error)=>{
      console.log("======>error",error.message);
   })
