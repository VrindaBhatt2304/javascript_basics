const user={
    usrername:"Vrinda",
    price:1000,

    welcomeMessage: function()
    {
        console.log(`${this.usrername}, welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage();
//user.usrername="bhatt";
//user.welcomeMessage();

//console.log(this);

//function chai()
//{
//    let user="vrinda"
//    console.log(this.user);
//}
//chai()

const chai=()=>{
    let usrername="Vrinda"
    console.log(this);
}
//chai();


//() => {}  arrow function
//const addtwo=(num1,num2)=>{
//    return num1+num2;
//}
//const addtwo=(num1,num2)=> num1+num2
const addtwo=(num1,num2)=> (num1+num2)
console.log(addtwo(5,5));