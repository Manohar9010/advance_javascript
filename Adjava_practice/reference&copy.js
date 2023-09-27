let obj1={ a:100,b:200}
// let obj2=obj1
// obj1.a=500;
let obj3={}
for (const key in obj1) {
    console.log(obj1[key]);
    obj3[key]=obj1[key]
} 
obj1.a=500

console.log("🚀 ~ file: reference&copy.js:3 ~ obj1:", obj1)
console.log("🚀 ~ file: reference&copy.js:3 ~ obj3:", obj3)



// spred

let obj4= {...obj1, c:"hllo",...obj3}

obj1.a=5000
console.log("🚀 ~ file: reference&copy.js:21 ~ obj1:", obj1)
console.log("🚀 ~ file: reference&copy.js:19 ~ obj4:", obj4)



