const express = require("express");
const zod = require("zod")
const app = express();
//using middlewares
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "arijit"|| password != "putu"){
        res.status(403).json({"msg" : "Something is wrong."})
        //return --- it is writen so that it does not ask forthe else part.
     }else{
        next()
     }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({"msg" : "Something is wrong with input."})
    }else{
        next()
     }
}

// app.use(userMiddleware) we can ommit writing in the function call and put this line in the beg, indication this will be used in later f(x)
// app.use(kidneyMiddleware) its a necesory part in post req
app.get("/health-checkup2", userMiddleware, kidneyMiddleware, function(req,res){
    res.send("Your kidney is healthy.")
})

app.use(express.json());

const schema = zod.array(zod.number());

app.post("/health-checkup2", function(req,res){
    const kidneys = req.body.kidneys;
    //const kidneyLength =  kidneys.length;
    const response = schema.safeParse(kidneys)
    // res.send("You have " + kidneyLength + " kidneys");
    res.send({
        response
    })
});
// // Global catch for erronous (error handling middleware)
// app.use(function(err,req,res,next){
//     res.json({msg :"An Internal Error Occured."});
// });
app.listen(3000);

// example schema ZOD
// const schema = zod.object({
//     email : zod.string(),
//     password : zod.string(),
//     country : zod.literal("IN").or(z.litra("US")),
//     kidneys : z.array(z.number())
// })