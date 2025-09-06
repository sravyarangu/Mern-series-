function fun1()
{
    console.log("Goodie Addams")
}
fun1()

function param(x,y)
{
    console.log("addition")
    return x+y;
}
let result = param(5,6)
console.log("result is :",result)

//second way of declaring a function
const a = function(x,y)
{
    return x*y
}
console.log(a(5,2))

//Arrow function
const sq =(x)=>x*x
console.log(sq(52))
const sub = (x,y)=>{
    return x-y
}
console.log(sub(58,6))