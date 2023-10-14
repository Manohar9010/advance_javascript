/*class User {
    print (){
        console.log("===print===");
    }
}
const class1=new User
console.log("class1:", class1)
class1.print()
*/


/*
class User1{
    constructor(){
        console.log("===constructor====");
        this.name="shivam"
        this.age=29
    }
    printname(){
        console.log("==print=name==",this.name);
    }
    printage(){
        console.log("====print age==",this.age);
    }
}

const show=new User1
show.printname()
show.printage()
*/

class User2{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    printname(){
        console.log(this.name);
    }
    printage(x){
        console.log(`my age will be ${this.age+x} after ${x} years`);
        console.log("current age",this.age);
    }

    sum(a,b){
        return a+b
    }
}


  

 const show1=new User2("shivam",15)
 const show2=new User2("mani",25)
 show1.printname()
 show1.printage(10)
 show2.printname()
 show2.printage(20)

let total=show1.sum(10,10)
console.log("total:", total)
