// 1 - import express
const express = require('express')
// 2 - init the app
const app = express () ;
// 3- create a port 
const PORT = 7800 ;
// 4 -create a server 
app.listen(PORT , (err) => 
err ? console.log(err) : console.log (`the app is running ${PORT}`))

// 5- middlewares 

const verifDate = (req , res , next) => {
    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
    let hours = new Date ().getHours() 
    if (
        days [new Date ().getDay ()] !== "Monday" && 
        days [new Date ().getDay ()] !== "Sunday" && hours > 9 && hours < 17
    )
    {next ()} else  
    {res.send ('<h3> we are not working , come back later</h3> ') } 
}
{/*
console.log (new Date ().getHours() )
console.log (new Date ().getMinutes())
console.log (new Date ().getDay())
*/}

app.use (verifDate) 
//5 - routing middlewares

app.use (express.static('Public'))
