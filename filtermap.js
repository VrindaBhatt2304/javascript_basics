const nums=[1,2,3,4,5,6,7,8,9,10];
//let newnum=nums.filter((n)=>{ return n>4})
//let newnum=nums.filter((n)=>n>4)
//console.log(newnum);

//const newnum=[];
//nums.forEach((n)=>{
//    if(n>5)
//    {newnum.push(n);}
//})
//console.log(newnum);

//const newnum=nums.map((n)=>n+10)
//console.log(newnum);

//const newnum=nums
//            .map((n)=>n*10)
//            .map((n)=>n+1)
//            .filter((n)=>n>50)

//console.log(newnum);


//const newnum=nums.reduce(function (acc,curr) {
//    console.log(`acc:${acc} and curr:${curr}`)
//    return acc+curr;
//},0)

const newnum=nums.reduce((acc,curr)=>acc+curr,0);
console.log(newnum);
