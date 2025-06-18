const promise1=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000);
});

promise1.then(function(){
    console.log("promise consume");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000);
}).then(function(){
    console.log("Async 2 resolved");
});

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    }, 1000);
});

promise3.then(function(user){
    console.log(user);
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {resolve({username:"vrinda",password:"123"})}
        else
        {reject('ERROR: Something went wrong')}
    }, 1000)
});

promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(()=>console.log("finally the promise is either resolved or rejected"));

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {resolve({username:"javascript",password:"123"})}
        else
        {reject('ERROR: JS went wrong')}
    }, 1000) 
})

//async function consumepromise5(){
//   const response=await promise5;
//    console.log(response);
//}
async function consumepromise5(){
    try{
        const response=await promise5;
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
consumepromise5();


async function getallusers() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
getallusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));