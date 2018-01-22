

const express = require('express');
const bodyParser=require('body-parser')
const cors= require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())

let favoritePlayer= 'My favorite NFL player is Von Miller';

app.get('/api/favplayer', (req, res)=>{
    console.log('endpointhit')
    console.log()
    res.status(200).send(favoritePlayer)
})

app.put('/api/newplaya', (req, res)=>{
    console.log('playplaya', req )
    let {newFavPlaya} = req.body 
    res.status(200).send(newFavPlaya)
} )

const Port=3001;
app.listen(Port, function(){
    console.log('Listening.....')
})