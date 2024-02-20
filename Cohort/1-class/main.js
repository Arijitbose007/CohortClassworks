var a = 1;
console.log(a);
let first = " My name";
console.log("What is" + first)
console.log(3)

 const object = [{
    id : 1,
    firstName : "Arijit",
},
{
    id : 2,
    firstName : "Arijit1",
},
{
    id : 3,
    firstName : "Arijit2",
},
{
    id : 4,
    firstName : "Arijit3",
}]

for(let i=0;i<object.length;i++){
    if(object[i]["id"] == 2)
        console.log(object[i]["firstName"])
}

