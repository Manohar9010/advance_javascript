let family={
    name:"manikyam",
    age:92,
    child:[{
        id:10,
        name:"venkat",
        age:75,
        occupation:"former",
        vehicle:[{
            name:"hero honda",
            number:4568,
        },{
            name:"i20",
            number:5985,
        }],
        child:[{
            name:"mohan",
            age:65,
            occupation:"job",
            vehicle:
            {
                name:"passion",
                number:5468,
            },
            child:["Radha","Raju"]
        },{
            name:"megana",
            age:60,
            occupation:"house wife",

        }]  
    },
    {
        id:11,
        name:"laxman",
        age:70,
        occupation:"former",
        vehicle:[{
            name:"hero",
            number:5845,

        },{
            name:"creta",
            numbre:5894,
        }],
        child:[{
            name:"krishna",
            age:50,
            occupation:"jober",
            vehicle:{
                name:"passion",
                number:4594,
            },
            child:["madhu","madhav"],
        },
        {
            name:"rekha",
            age:45,
            occupation:"house wife",
            child:["sudha","Ragav"]
        }
       
    ],
    },
    {
       id:12,
       name:"somaiah",
       age:65,
       occupation:"jober",
       vehicle:[{
        name:"tvs apache",
        number:5985,

       },{
        name:"bmw",
        number:14365,
       }],
       child:[{
        name:"manjula",
        age:45,
        occupation:"house wife",
       },{
        name:"swapna",
        age:40,
        occupation:"house wife",

       },{
        name:"manohar",
        age:26,
        occupation:"jober",
        vehicle:{
            name:"tvs apache",
            number:4584,
        },
       }
     ]
    },
         
    ]
}

// console.log(family.name);
// console.log(family.child[1].name);
// console.log(family.child[1].child[1].name);
// console.log(family.child[2].vehicle[0].name);
// console.log(family.child[0].vehicle[0].number);
console.log("vechicle name of all:",family.child.name);

// with map 
// second child vehicle name
// console.log("------second child vehicle name-------");
// let vname= family.child[1].vehicle.map((e)=>{
//     return e.name
// })

// console.log(vname);

// sum of third child sons age 
  
// console.log("--------sum of third child sons age--------");
// let age1= family.child[2].child.map((e)=>{
//     return e.age
// })

//     console.log("age", age1)
//     let total=age1.reduce((lastev,e)=>{
//         return lastev+e
//     },0)
//     console.log("total of age=",total);
 
// vehicle details of each family member
let vehicleNames = [];

for (let i = 0; i < family.child.length; i++) {
  for (let j = 0; j < family.child[i].vehicle.length; j++) {
    vehicleNames.push(family.child[i].vehicle[j]);
  }
}

console.log(vehicleNames);

// -> all son of your dada name only
let sonNames = [];

for (let i = 0; i < family.child.length; i++) {
  sonNames.push(family.child[i].name);
}

console.log(sonNames);




  
