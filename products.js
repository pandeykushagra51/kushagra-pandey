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

// Get request

router.get('/:productId',(req,res)=>{
    let id=req.params.productId;
    let adress = url.parse(req.url,true)
    let query = adress.query
    
    var filePath = __dirname + '/products/' + id + '.json'
    filePath.replace('%20',' ')

    fs.readFile(filePath,'utf-8' ,function(err, data){
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(filePath)
            res.send(data)
        }
    });

})

module.exports = router



