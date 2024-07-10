require('dotenv').config()

const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send(`Hello World at port ${process.env.PORT}`)
})
app.get('/backend', (req,res)=>{
    res.send('<h1>World is coming down</h1>')
})
app.listen(process.env.PORT, ()=>{
    console.log(`Amit is now here ${process.env.PORT}`)
})