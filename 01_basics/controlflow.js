//control types

//1: if-else statement
let j=5;
if ( j=5) {
   //  console.log(j);
    
}

//2:else-if(to have multiple condition

 let age=14;
 const hasDrivingLic=!false;

 if(age >=18 && hasDrivingLic){
   // console.log("you are allowed to drive");
 }else if(age>=18 && !hasDrivingLic){
   // console.log("you are allowed to drive But you need a driving lic");   
 }else{
   // console.log("ypu are not eligible to drive");
 }
    

 //switch cases

let Operation="division" ;
let a=11
let b=5
let result;

 switch(Operation){
   case "addition":
      console.log(result=a+b)
      break;

   case "subraction" :
      console.log(result=a-b)
      break;
   
   case "multiplication":
      console.log(result=a*b)
      break;

   case "division":
       console.log(result=a/b);      
       break;

   default:
      console.log("in valid operation");      
 }
