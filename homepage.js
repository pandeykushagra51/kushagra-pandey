const express = require('express')
const app = express()
const { homedir } = require('os')
const productRoute = require('./products')
const queryRoute = require('./query')

app.get('/',(req,res)=>{
    console.log('Homepage called')
    res.sendFile('./Error/Homepage.html',{root:__dirname})
})

app.use('/products',productRoute)
app.use('/query',queryRoute)

app.use((req,res)=>{
    let cnt=0;
    for(let i=0;i<10;i++)
    cnt+=i;
    console.log(cnt)
    res.sendFile('./Error/404.html',{root:__dirname})
})


app.listen(3000)
module.exports = app