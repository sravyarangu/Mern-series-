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
while (day<=7 && day>=1)
{
    console.log("It is a weekday")
    console.log(day)
    day++
}
for(let i = 0;i<=7;i++)
{
    console.log("Session : ",i)
}