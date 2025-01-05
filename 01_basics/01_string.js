const name ="adnan madar"


//console.log(name.__proto__.lentgh);it is used access the prototype of obbect
// there are multiple proto type ex:length,at(),big,small,lastIndexOf ,
// chatAt ,indexOf, etc.. 

console.log(name.indexOf('n'));
const newString = name.substring(3)
console.log(newString);

const anotherString = name.slice(-8,8)
console.log(anotherString);

let nam ="Hello World"
console.log(nam.replace(/HEllo/i,"world"));//concat it is use to add two string used instead + operator

console.log("adnan\nmadar ");
let myname="    adnan \n "
console.log(myname.trim());

console.log(myname.includes('adnan'));
console.log(name.split(' '))

