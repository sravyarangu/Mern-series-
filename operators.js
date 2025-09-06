let x = 12, y = 9

//Arithmetic operators

console.log("arithmetic operators :")
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)

//asignment operators

console.log("assignment operators :")
y+=9
console.log(y)
y-=4
console.log(y)
y/=8
console.log(y)

//comparison operators

console.log("comparison operators :")
let a = "52",b = 52
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)
console.log(a<b)

//logical operators

console.log("logical operators :")
console.log(a>=10 && a!=4)
console.log(a<20||a==5)
console.log(!(a<9))


//String operators

console.log("String operators :")
let first = "Sravya" , last = "Rangu"
let fullname = first+","+last
console.log(fullname)
let msg = `Hello ${first} , Fine afternoon ${last}`
console.log(msg)

//ternary operator

console.log("ternary operator :")
console.log(a>18?"hello , you drive ":"no , you can't drive")

//increment and decrement operators

console.log("increment and decrement operators :")
let count = 52
console.log(count++) // post increment
console.log(count)
console.log(++count)  //pre increment
console.log(count)
console.log(count--)  //post decrement
console.log(count)
console.log(--count) //pre decrement


//typeof operators

console.log("typeof operators")
console.log(typeof a)
console.log(typeof "mern")
console.log(typeof count)