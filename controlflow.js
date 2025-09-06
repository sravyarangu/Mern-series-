let marks = 52
if(marks>50)
{
    console.log("good")
}
else if(marks ==100)
{
    console.log("excellent")
}
else
{
    console.log("failed")
}

//switch statement 
let day = 1
switch(day)
{
    case 1:
            console.log("sunday")
            break;
    case 2:
            console.log("monday")
            break;
    case 3 :
            console.log("tuesday")
            break;
    case 4:
            console.log("wednesday")
            break;
    default :
    {
        console.log("sorry")
        break;
    }

}

//while loop
while (day<=7 && day>=1)
{
    console.log("It is a weekday")
    console.log(day)
    day++
}

//for loop
for(let i = 0;i<=7;i++)
{
    console.log("Session : ",i)
}

//array
let colors = ['red','white','black']
for (let i = 0 ; i<=colors.length; i++)
{
    console.log(colors[i])
}
for(let color of colors)
{
    console.log(color)
}

//object declaration

let person = {
    name : "Sravya",
    age:19,
    session : 1,
    attendance : 20
}
for(let i in person )
{
    console.log(`${i} : ${person[i]}`)
}

for (let i = 0 ;i<=3;i++)
{
    if(i==1)
    {
        continue;
    }
    else{
        console.log("Vannakam ...")
    }
}
