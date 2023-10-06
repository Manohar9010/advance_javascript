const arr =[1,2,3,4,5,6,]

let [a,b,...c]=arr
// console.log("c:", c)
// console.log("b:", b)
// console.log("a:", a)

function fun1(a,b,...c) {
    console.log("fun1 ~ c:", c)
    console.log("fun1 ~ b:", b)
    console.log("fun1 ~ a:", a)
    let total =0;
    c.map((e)=>{
        total+=e;
    });
    return a+b+total;
}
let x = fun1(1,2,3,4,5,6,7)
console.log("x:", x)


let obj ={a1:30,b1:40,c1:87,d1:34}

let {a1,b1,...c21}=obj
console.log("c1:", c21)
console.log("b1:", b1)
console.log("a1:", a1)

