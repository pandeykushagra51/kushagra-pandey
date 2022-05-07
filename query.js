const express = require('express')
const router = express.Router()
const url = require('url')
const os = require('os')
const fs = require('fs')
const path = require('path')

// create dummy database by name my Database
const myDb = require('./myDB')
const { dirname } = require('path')
const res = require('express/lib/response')
const bodyParser = require('body-parser')


app.use(express.json());

router.get('/sum','utf8',(req,res)=>{
    let id=req.params.userId;
    let adress = url.parse(req.url,true)
    let body = req.body
    let query = adress.query
    let sum=getSum(query.start,query.end,body)
    res.send(sum,body)
})

module.exports = router



