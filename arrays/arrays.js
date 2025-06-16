const myarray=[0,1,2,3,4,5];
//console.log(myarray);
const newarr=myarray.join();
//console.log(newarr);

const mynew1=myarray.slice(1,3);//just prints that sliced part of array
console.log("A ",myarray);
console.log(mynew1);
console.log("B ",myarray);
const mynew2=myarray.splice(1,3);//removes that part from original array
console.log(mynew2);
console.log("C ",myarray);
