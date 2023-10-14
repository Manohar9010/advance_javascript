// 1. import data from json
let data = require("../assignment/data.json")
// console.log("data:", data)

// 2. give all city name of state which one give by user
// 
function getcityname(state) {
    let filterdata= data.filter((e)=>{
         return e?.state_name ===state;
         
     })
     let cityfil=filterdata.map((e)=>{
         return e.city
     })
      return cityfil
 }
 
 
 let city1= getcityname("Gujarāt")
 console.log("city1:", city1)

//  3. give all city name , which have more character than user given input

function city(params) {
    let cityname=data.map((e)=>{
        return e.city
    })
    //  console.log("cityname ~ cityname:", typeof cityname)
    let cityshow=cityname.filter((e)=>{
        return e.length>15
    }) 
    console.log("cityshow ~ cityshow:", cityshow)

    
}

 city()

//  4. city list which has population more then user give

function citybypopulation(populations) {
    let populationfill=data.filter((e)=>{
        // Number(populations)
        return e.population >populations;
    })
    
    
    let citynamebypopulation=populationfill.map((e)=>{

        return e?.city;  
    })
    
    return citynamebypopulation;
}

let cityn1=citybypopulation(10000000)
console.log("cityn1:", cityn1)

// 5. acending decending population wise
    



