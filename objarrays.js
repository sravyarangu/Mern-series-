let person = {
    name :"Sravya",
    age : 12,
    subj :"Mern"
}
console.log(person.name)
console.log(person["age"])

//Destructuring assignment
const {name , age }= person;
console.log(name,age)

let core = ["cse","it","ece"]
console.log(core[1])

let count = [1,3,4,6]
//array methods
let square = count.map(num=>num*num);//transform each element
console.log(square)
console.log(count)

let evens = square.filter(num =>num%2==0) //filter vakues based on conditon 
console.log(evens)

let sum = square.reduce((p,num)=>p+num)  //reduce into a single
console.log(sum)

//array of objects

let person1 = {
    Name : "Sravya",
    marks : 95
}
let person2 = {
    Name : " Italy",
    marks : 98
}

let person3 =  {
    Name : "london",
    marks : 99
}
let ar = [ {
    Name : "Sravya",
    marks : 95
}, {
    Name : " Italy",
    marks : 98
},{
    Name : "London",
    marks : 99
}]
console.log(ar)
ar2=[person1,person2,person3]
console.log(ar2)
console.log(ar2[0])

let max = 0
let topper 
for(i of ar)
{
   if(max <i.marks)
   {
    max = i.marks
   topper = i.Name
   }
}
console.log(topper)
console.log(max)