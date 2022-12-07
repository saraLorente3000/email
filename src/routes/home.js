const express = require("express");
const app = express();
const {sendEmail} = require('../connections/nodemailer')

//Send method
app.get("/send", async(req,res)=>{
    //I check if I receive the parameters
    if(req.query.email === undefined)
        res.status(404).json({err:"Email is mandatory"})
    else if(req.query.newsletter === undefined)
        res.status(404).json({err:"Newsletter is mandatory"})
    else{
        try{
            //if I receive them I send the email
            await sendEmail(req.query.email, req.query.newsletter)
            res.sendStatus(200)
        }catch(err){
            res.status(500)
        }
    }
    
})

module.exports = app;