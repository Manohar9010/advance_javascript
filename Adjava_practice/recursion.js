function fun1(x) {
    console.log("recrsion===>",x);

    if(x>0){
        
        fun1(x-1)
    }
    

}
fun1(10)