const obj={
    name:"manohar",
    age:25,
    adress:{
        plot:"3/6,kailash nagar ",
        landmark:"shiva temple",
        city:"surat",

    }
}

console.log("obj",obj);
let jsonstr=JSON.stringify(obj);  //stringify  converte data to string
console.log("🚀 ~ file: json.js:13 ~ jsonstr:", jsonstr)

let normaldata=JSON.parse(jsonstr) // parse conver data string to narmal data
console.log("🚀 ~ file: json.js:16 ~ normaldata:", normaldata)

const json=require("./json-method-tojson.json")
console.log("🚀 ~ file: index.js:14 ~ json:", json)