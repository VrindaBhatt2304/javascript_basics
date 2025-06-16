const myarray=[0,1,2,3,4,5];
//console.log(myarray);
const newarr=myarray.join();
//console.log(newarr);

const mynew1=myarray.slice(1,3);//just prints that sliced part of array
//console.log("A ",myarray);
//console.log(mynew1);
//console.log("B ",myarray);
const mynew2=myarray.splice(1,3);//removes that part from original array
//console.log(mynew2);
//console.log("C ",myarray);


const marvel=["thor","ironman","blackwidow"];
const dc=["superman","flash","batman"];
//marvel.push(dc);
//console.log(marvel);

//const heros=marvel.concat(dc);
//console.log(heros);

//const allheros=[...marvel,...dc];
//console.log(allheros);

const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realarr=arr.flat(Infinity);
//console.log(realarr);

console.log(Array.isArray("vrinda"));
console.log(Array.from("vrinda"));
console.log(Array.from({name: "vrinda"}));