//implicit Typeconversion
//String Conversion
let age = 25;
console.log(age);
console.log("Typeconversion");

console.log('12' / '2'); // 6
console.log('12' + '2'); // 122  //'+' is used for string concatenation
console.log('12' - '2'); // 10
console.log('12' * '2'); // 24


//Explicit Typeconversion
//String Conversion
let num = 10;
let str = String(num); // Convert number to string
console.log(typeof str); // "10" 

let isAdult = true;
isAdult = String(isAdult); // Convert boolean to string
console.log(typeof isAdult); // "boolean"

//Number Conversion
let string = '19';
console.log(Number(string) + 1); // 20

let number = '19.6';
console.log(Number(number) + 1); // 19.6

//Different types of Number Conversion
let a = 'true';
let b = 'false';
let c = '123a';
console.log(Number(a)); // NaN
console.log(Number(b)); // NaN
console.log(Number(c)); // NaN

let A = true;
let B = false;
let C = undefined;
console.log(Number(A)); // 1
console.log(Number(B)); // 0
console.log(Number(C)); // NaN

//Different types of Boolean Conversion
let x = 1;
console.log(typeof x);
x = Bollean(x); // Convert number to boolean
console.log(typeof x); // "boolean"
console.log(x); // true

let y = 0;
console.log(typeof y);
y = Boolean(y); // Convert number to boolean
console.log(typeof y); // "boolean"
console.log(y); // false
