//singleton
const mysym=Symbol("Key1");

const juser={
    name:"Vrinda",
    [mysym]:"mykey1",
    age:23,
    location:"Dehradun",
    email:"vrindabhatt@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
};

//console.log(juser["email"]); best way to declare
//console.log(juser.email);

//console.log(typeof juser[mysym]);
//console.log(juser[mysym]);

//juser.email="vrindabhatt2304@gmail.com";
//Object.freeze(juser);
//juser.email="vbhatt2304@google.com";
//console.log(juser);

juser.greeting = function(){
    console.log("hello js user");
}

//console.log(juser.greeting());

//juser.greetingone = function(){
//    console.log(`hello js user, ${this.name}`);
//}

//console.log(juser.greetingone());

const tinderuser = {}
tinderuser.id="123abc";
tinderuser.name="ridhi";
tinderuser.loggedin=false;

//console.log(tinderuser);

const regularuser={
    email:"someone@gmai.com",
    fullname:{
        userfullname:{
            firstname:"vrinda",
            lastname:"bhatt"
        }
    }
}
//console.log(regularuser.userfullname);

const ob1={1:"a", 2:"b"};
const ob2={3:"c", 4:"d"};
//const ob3={ob1,ob2};
//console.log(ob3);

const ob3=Object.assign({},ob1,ob2);
//console.log(ob3);

//console.log(tinderuser);
//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderuser));

//console.log(tinderuser.hasOwnProperty('name'));

const course={
    cousename:"javascript",
    coursefee:"1999",
    courserinstructor:"vrinda"
}
//destructuring objects
const{courserinstructor : ci}=course;
//console.log(course.courserinstructor);
console.log(ci);

//json object
//{
//    name:"vrindabhatt",
//    id:1123453,
//    coursename:"js",
//    price:"free"
//}
