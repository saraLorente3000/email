const express = require('express')

//Initialize express
const app = express();
//I use the routes file
app.use((require("./src/routes/home")))

//I get the port from the environment variable and if not I put the default one
const port = process.env.PORT? process.env.PORT : 8080

//I put the port
app.listen(3002, () =>{
    
})