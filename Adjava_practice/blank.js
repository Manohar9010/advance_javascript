let jdata=require("../assignment/product.json")
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
const highDiscountItems = jdata.filter(item => {
    if (item.discountPercentage > 17) {
      return { brand: item.brand, price: item.price };
    }
});
console.log("highDiscountItems ~ highDiscountItems:", highDiscountItems)