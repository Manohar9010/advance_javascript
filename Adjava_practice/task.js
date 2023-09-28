/*// sum of elements with for each loop

let arr=[1,2,3,4,5,6]
let sum=0;
arr.forEach(e=> sum += e);
console.log(sum);

//  sum with map
let arr3=[1,2,3,4,5,6];
let sum1=arr.map((a,b)=>{
    return a+b
})
console.log("sum:", sum1)

// sum with reducer

let arr4=[1,2,3,4,5,6]

let show4=arr.reduce((last,e)=>{

    return last+e
},0)
console.log(show4);



// add * with element use of jion


let arr1=[1,2,3,4,5]

let star= arr.join("*")
console.log(star);


// add 5 to elements with map

let arr2=[1,2,3,4,5]

let add= arr2.map((e,i)=>{
    return e+5
})
console.log ("add", add)



let currentdate = new Date();
console.log("currentdate", currentdate);

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  " August",
  "September",
  "October",
  "November",
  "December",
];

let weekday = [
  "Sunday",
  "Monday",
  "Thuseday",
  "Wednesday",
  "Turseday",
  "Friday",
  "Sataurday",
];
if ((weekday[0] = "sunday")) {
  weekday[0] = " To day is Fun day";
}
console.log("cuurernt :", currentdate.getDate());

let munthnum = currentdate.getMonth();
let daynum = currentdate.getDay();
let dd = currentdate.getDate();
let mm = currentdate.getMonth();
let yy = currentdate.getFullYear();

let y = dd + " " + month[munthnum] + " " + yy + " and " + weekday[daynum];

console.log(y);

//  function fun(params) {
//     let z=0;
//     for (let z = 0; z < Infinity; z++) {

//        y=Math.random()*10;
//        console.log(Math.trunc(z));
//        if(z<6){
//             break
//        }
//     }
//     console.log(z);
//  }

//   let show= fun()
//   console.log(show);

console.log("========================");
function fun1(params) {
  for (let i = 0; i < Infinity; i++) {
    var m = Math.trunc(Math.random() * 10) + 1;
    // console.log(" check:",y)
    if (m > 6) {
      break;
    }
    console.log(" random num", m);
  }

  return m;
}
let show1 = fun1();
console.log("last one", show1);




let string="mani g gattu"

let g = string.split(" ").reverse().join(" ") .split("") .reverse() .join("")
console.log("string:", g)


for (let i = 1; i < 7; i++) {
  // let y = i
  // console.log("🚀 ~ file: task5.js:3 ~ y:", y)
  let x = Math.round(Math.random()*i)+1;
  console.log("🚀 ~ file: task5.js:3 ~ x:", x)
 
}
*/

// let current =new Date()

// let set=  setInterval(()=>{
//    // const element = array[i];
    
//     console.log(current);

// },2000)

// setTimeout(()=>{
//   clearInterval(set)
// },9000)

let intervalId;
let count = 0;

function printTime() {
  const now = new Date();
  console.log(now.toLocaleString());
  count++;
  if (count >= 5) {
    clearInterval(intervalId);
  }
}

intervalId = setInterval(printTime, 2000);







