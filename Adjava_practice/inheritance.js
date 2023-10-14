class ComUser
{
    login(){
        console.log("===login===");
    }
}


class Teacher extends ComUser{
    salary(){
        console.log("==salary==");
    }
}


class Student extends ComUser{
    login(){
        super.login()
        console.log("====Student login====");
    }
    fees(){
        console.log("====fees====");
    }
}

const Teach=new Teacher
const Stu=new Student
Stu.login()
Teach.login()

