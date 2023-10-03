let user={
    name:"shivam",
    age:25,
}

let {age,name}=user
console.log("age:", age)
console.log("name:", name)



let go =[1,2,3,4,]

let [a,b,c,d]=go
console.log("d:", d)
console.log("c:", c)
console.log("b:", b)
console.log("a:", a)


function returnObj() {
    return {
      name: "--->uv",
      city: "--->surat",
    };
  }
  
  const obj2 = returnObj();
  console.log("obj2", obj2);
  