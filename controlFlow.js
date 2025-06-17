//if
const temp=51;
if(temp<50)
{
    console.log("less than 50");
}
else
{
    console.log("more than 50");
}
//true values: true 1 "0" 'false' " " [] {} function(){}

//false values: false 0 -0 bigint(0n) null undefined NaN

//<,>,<=,>=,==(ignores datatype),!=,===(strictly equal)

//switch
const month=3;
switch(month)
{
    case 1:
        console.log("JANUARY");
        break;
    case 2:
        console.log("FEBURARY");
        break;
    case 3:
        console.log("MARCH");
        break;
    case 4:
        console.log("APRIL");
        break;
    default:
        console.log("default case match");
        break;
}

//for loop iteration

for(let index=0;index<10;index++)
{
    const element=index+1;
    console.log(element);
}
//break and continue

//while  do-while loop iteration
let index=1;
while(index<5)
{
    console.log(`index is ${index+1}`);
    index=index+2;
}

//for of loop
const arr=[1,2,3,4,5,6];
for (const num of arr) {
    console.log(num);
}

//map

const map=new Map();
map.set('in',"india")
map.set('usa',"america")

console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
}


//for in loop
const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
//for (const key in myobj) {
//    console.log(key);
//    console.log(myobj[key]);
//}

const codes=["js", "cpp", "ruby","python", "java"];
//codes.forEach( function (item){
//    console.log(item);
//})
//codes.forEach((item)=>{
//    console.log(item);
//})

//function printing(item)
//{console.log(item);}
//codes.forEach(printing);

codes.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

