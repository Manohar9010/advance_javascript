function fun1(argfun,cb) {
    setTimeout(() => {
        console.log("====fun1");
        cb(argfun)
    }, [2000]);
}

function fun2(cb2) {
    setTimeout(() => {
        console.log("=====fun2");
        cb2()
    }, 3000);
}


function fun3() {
    console.log("=====fum3");
}

fun1(fun3,fun2)

