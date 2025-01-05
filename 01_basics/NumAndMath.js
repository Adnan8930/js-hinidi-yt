const score=350
console.log(score);

const newscore =new Number(100)
console.log(newscore);

console.log(newscore.toString().length);

const value =4500
console.log(value.toFixed(2));

const nextScore= 367785.5
console.log(nextScore.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-KR'));

const date = new Date(Date.UTC(2012,11,20,3,0,0))
console.log(date.toLocaleString('en-IN' ,{timeZone: 'UTC'}));
