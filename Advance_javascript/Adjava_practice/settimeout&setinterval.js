setTimeout(()=>{
    console.log("====hello world=====");
},5000)
let id= setInterval(()=>{
    console.log("======setinterval========");
},2000)

setTimeout(() => {
    clearInterval(id)
}, 8000);