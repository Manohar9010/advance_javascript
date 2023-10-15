let jdata=require("../assignment/data.json")
// console.log("jdata:", jdata)
// function fun1(koo) {
//     let x=jdata.map((e)=>{
//         return e.brand
//     })
    
//     let y=x.filter((e)=>{
//        return e===koo
//     })
//     console.log("y ~ y:", y)
    
// }

// fun1("Oppo")

/*
function fun1(man) {
    let x=jdata.filter((e)=>{
        return e.brand===man 
    })
    // console.log("x ~ x:", x)
    if(x){
        return x.filter((e)=>{
            
            return e
        })
    }else{
        return "not prasent"
    }
}
let z= fun1("Oppo")
// console.log("z:", z)

let show=z.map((e)=>{
    return e.availableStock
})

let tota=show.reduce((last,e)=>{
    return last+e
},0)
// console.log("tota ~ show:", show)
console.log("tota ~ tota:", tota)

*/

// javascript

let arr =[];
jdata.map((obje)=>{
    let index=arr.findIndex((ife)=>ife.state===obje.state_name);
    if(index===-1){
        arr.push({
            state:obje.state_name,
            population:+obje.population
        })
    }else{
        arr[index].population+= +obje.population
    }
})
// console.log("jdata.map ~ arr:", arr)

let x= arr.sort((a,b)=>{
    return b.population-a.population
})
console.log("x ~ x:", x)



