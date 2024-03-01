const express = require("express");

const app = express();
//ugly way of validation
app.get("/health-checkup", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "arijit"|| password != "putu"){
       res.status(400).json({"msg" : "Something is wrong."})
       return // it is writen so that it does not ask forthe else part.
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg" : "Something is wrong with input."})
        return
    }
    res.json({
        msg:"Your Kidney is fine."
    })
});


app.listen(3000);