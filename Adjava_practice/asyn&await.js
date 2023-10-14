function fun1(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"shivam",city:"surat"})
        },2000)
    })
}

function print(obj) {
    console.log(`my name is ${obj.name}`);
    console.log(`my city
     is ${obj.city}`);
}
const mainfun=async ()=>{
    const data=await fun1()
    console.log(data);
    print(data)
}
mainfun()