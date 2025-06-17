function saymyname(){
    console.log("V");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("A");
}

//saymyname();

function addtwono(num1,num2){
    console.log(num1+num2);
}
//addtwono(3,null);

function addno(num1,num2)
{
    let result=num1+num2;
    return result;
    //return num1+num2;
}
const res=addno(5,5);
//console.log("result : ",res);

function loginmessage(username="user")
{
    if(username===undefined)//if(!username)
    {console.log("Please Enter a Username");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginmessage());


//function calculatecartprice(...num1){//rest(... operator)
function calculatecartprice(val1,val2, ...num1)
{
    return num1;
}
//console.log(calculatecartprice(200,400,600,800,1000));

const user={
    username:"vrinda",
    price:100
}

function handleobject(anyobj)
{
    console.log(`UserName is ${anyobj.username} and price is ${anyobj.price}`);
}

//handleobject(user);we can also directly pass the object instead of first creating import {  } from "module";


function one()
{
    const username="vrinda"

    function two()
    {
        const website="youtube"
        console.log(username);
        console.log(website);
    }
    //console.log(website);
    two()
}
one();