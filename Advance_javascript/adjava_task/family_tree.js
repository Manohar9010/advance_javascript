// let z = 10;

// if ((z < 15 && z > 15) || z === 10) {
//   console.log("go");
// }

// let y = 20;
// if (y) {
//   console.log("yyyyyyyyyy");
// }

// let b = 10;
// if (b === 5) console.log("true c");
// else console.log("false c");

// let a = 20;
// let g = 30;
// a > g ? console.log("true20") : console.log("flase40");

// function shiva() {
//   console.log("shivam");
//   return [1, 1, 1, 1];
// }
// let x = shiva();
// console.log(x);

// function easy(a, b, c) {
//   console.log("tetxt");
//   return "text";
// }
// let u = easy(1);
// console.log(u);

// emp = { id: 102, name: "shiva", salary: 90000 };
// console.log(emp.id + "" + emp.name + "" + emp.salary);
// // ielts
// // 15000 fee for one time
// // total 40lac

// const jsuser = {
//   name: "shivam",
//   age: 18,
//   mobile: 9848022338,
// }

  console.log("--------------------------------------family Tree------------------------------------------------------");

  let family={
    gardfather:del={
      name:"Manikyam",
      age:75,
      occupation:"Farmer",
    },
    grandfather_child:["venkatadry","laxmaiah","somaiah" ],
    venkatadry:venkatadry_del={ 
      name:"venkatadry",
       age:65,
       occupation:"Farmer",
      child:["venkat","manikyam"],
      vehicle_details:["car","bike"],
      car:car_del={
        company:"BMW",
        model:"BMW iX1",
        car_number:"GJ05y8546"
      },
      bike:bike_del={
          company:"Harley Davidson",
          model:"2010 CVO Street Glide",
          bike_number:"GJ05 UE 1594"
      },
      venkatadry_child_venkat:vekat_del={
            age:45,
            occupation:"Farmer",
            vekat_child:["sandeep","monika"],
      },
      venkatadry_child_manikyam:maikyam_del={
        age:40,
        occupation:"Farmer",
        vekat_child:["suhan","roja"],
      },
      venkatadry_child_venkat:vekat_del={
        age:35,
        occupation:"Farmer",
        vekat_child:["rohan","mamath"],
  },
      
    },
    laxmaiah:laxmaiah_del={
      name:"laxmaiah",
      age:60,
      occupation:"Farmer",
     child:["mallanna","manikyam"],
     vehicle_details:["car","bike"],
     car:car_del={
       company:"BMW",
       model:"BMW iX2",
       car_number:"GJ05y0546"
     },
     bike:bike_del={
         company:"hoyabusa",
         model:"2005 model",
         bike_number:"GJ05 UE 4504"
     },
     laxmaiah_child_mallanna:mallanna_del={
           age:45,
           occupation:"Farmer",
           vekat_child:["sai","saritha"],
     },
     mallanna_child_sai:sai_del={
       age:25,
       occupation:"student",
       
     },
     mallanna_child_saritha:saritha_del={
       age:30,
       occupation:"house wife",
       vekat_child:["druv","ramesh"],
 },
 laxmaiah_child_manikyam:manikyam_del={
      age:35,
      occupation:"CA",
      manikyam_child:["rohan","megana"]  
 }
    },
    somaiah:somaiah_del={
      name:"somaiah",
      age:55,
      occupation:"Farmer",
     child:["manohar","majula","swapna","saujanya"],
     vehicle_details:["car","bike"],
     car:car_del={
       company:"benz",
       model:"2023 Mercedes-AMG AMG GT",
       car_number:"GJ05y1546"
     },                                                                                                      
     bike:bike_del={
         company:"tvsapache",
         model:"160 rtr",
         bike_number:"GJ05 UE 1438"
     },
    },

  }
  // console.log(family);
  console.log(family.somaiah);

  


