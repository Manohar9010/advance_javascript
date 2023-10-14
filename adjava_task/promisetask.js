const m1= new Promise((resolve,rejeact)=>{
    const arr=[1,2,3,4,5]
      let now =arr.includes(5)
   //    throw new Error("====manually generated error")
      if (now) {
          resolve({name:"shivam"})
          
       }else{
           rejeact("5 is not in array")
       }
    //    console.log("newPromise ~ exist:", now)
   })
   m1.then((res)=>{
//    console.log("=======>res",res);
   return {...res,city:"surat"}
   })
   .then((res1)=>{ 
    //    console.log("=====>",res1);
       return {...res1,age:25}
   })
   .then((res3)=>{
       console.log("=====>res3",res3);
   })
   .catch((error)=>{
      console.log("======>error",error.message);
   })