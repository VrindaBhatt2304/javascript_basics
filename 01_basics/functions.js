const myfunc=function(){
    console.log("hello world");
}
console.log(myfunc());

let userone={
    email:"vrindabhatt@google.com",
    upi:"user1@gpay"
}
let usertwo=userone;
usertwo.email="vrinda@google.com"

console.log(userone.email);
console.log(usertwo.email);

//way to print
console.log(`hello my email is ${userone.email}`);

