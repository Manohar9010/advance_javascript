 class ComUser
{
    constructor(feesamt,salaryamt){
        this.fess=feesamt
        this.salaryg=salaryamt
    }
    login(){
        console.log("===login===");
    }
}


class Teacher extends ComUser{
    salary(){
        console.log("==salary==",this.salaryg);
    }
}


class Student extends ComUser{
  constructor(feesamt,salaryamt){
    super(feesamt,salaryamt )
    this.feees=45000
  }
    fessprint(){
        console.log("====fessprint====",this.feees);
    }
}

const Teach=new Teacher
const Stu=new Student
// Stu.login()
Stu.fessprint()
// Teach.login()
Teach.salary()
