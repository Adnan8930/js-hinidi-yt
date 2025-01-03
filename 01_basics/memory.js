//two type of memory: stack and heap memory

//1:stack memory(primitive values)[it create a copy of original value for reference.original value doet not change]

let namee = "adnan"

let anotheranme = namee
anotheranme = "ad"

console.log(anotheranme);//value of anothername change
console.log(namee);//value of name does'nt change

//2:heap memory(Non-premitive values)[it give the acces of the orogonal value , origina value can be change]
let One = {
    email: "adnan@gmail.com",
    Pass: 123
}

console.log(One);

let Two = One

Two.email= "kh@gmaol.com"
Two.Pass = 456

console.log(One);
console.log(Two);


