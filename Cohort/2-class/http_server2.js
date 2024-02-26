const express = require('express');
const app = express();

var users = [{  //This is inmmory db , each time you refresh it will refresh.
    name : "John",
    kidneys : [{
        healthy : false,
    }]
}];

app.use(express.json()); //to pass json to server when in POST

app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0 ; i < johnKidneys.length ; i++){

        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys += 1;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy,
    })
    res.json({
        msg : "Done!"
    })
})
//replace unhealthy with healthy kidneys
app.put("/", function(req , res){
    if(atleastOneUnhealthKidney()){
        for(let i = 0 ; i < users[0].kidneys.length ; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg : "Changes Made"
        })
    }else{
        res.status(412).json({ //status code is used in frontend.
            msg : "No unhealthy kidney to convert."
        })
    }
   
})
//remove all unhealthy kidneys
app.delete("/", function(req,res){
    const newKidney = [];
    if(atleastOneUnhealthKidney()){
        for(let i = 0 ; i < users[0].kidneys.length ; i++){
            if(users[0].kidneys[i].healthy)
                 newKidney.push({
             healthy : true
            })
         }
         users[0].kidneys = newKidney;
         res.json({
            msg : "Changes Made"
        })
    }else{
        res.status(411).json({ //status code is used in frontend.
            msg : "All your kidney is healthy"
        })
    }
    
   
})

function atleastOneUnhealthKidney(){
    let atleastOneUnhealthKidney = false;
    for(let i = 0 ; i < users[0].kidneys.length ; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthKidney = true;
        }
    }
    return atleastOneUnhealthKidney;
}
app.listen(3000);
// function sum(n){
//     let ans = 0;
//     for(let i = 0 ; i < n ; i++){
//         ans += ans + i;
//     }s
//     return ans;
// }
// app.get("/", function(req,res){
//     const n = req.query.n; note : req.query is for GET, for POST it is req.body
//     const ans = sum(n);
//     res.send("The answer is :" + ans);
// })
// app.listen(3000);

