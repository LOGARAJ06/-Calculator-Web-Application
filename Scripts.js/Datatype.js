let a = 5;
let b = 10.55;
console.log(a + b); // Output: 15.55

let A = 5;
let B = 10.55;
console.log(typeof A); // Output: number
console.log(typeof B); // Output: number

let infi = Infinity;
let negInfi = -Infinity;
let nan = NaN; // Not a Number
let C = NaN + 5; // NaN + number results in NaN
console.log(infi); // Output: Infinity
console.log(negInfi); // Output: -Infinity
console.log(typeof infi); // Output: number
console.log(typeof negInfi); // Output: number

let D = NaN ** 0;
console.log(D); // Output: 1
console.log(typeof nan); // Output: number
console.log(1/0); // Output: Infinity
console.log(0/0); // Output: NaN

//bigInt
let limit = 9007199254740991n ; // Maximum safe integer in JavaScript
console.log(limit); // Output: 9007199254740991
let G = BigInt(limit + 1n); // Using BigInt for larger
console.log(G); // Output: 9007199254740991n

let Larger = 1234567890n;
console.log(Larger + 2024n);
console.log(typeof Larger); // Output: bigint 