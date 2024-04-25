const express = require('express');
const server = express()
const PORT = 3030

server.get('/', (req, res)=>{
    // console.log(req);
    res.status(200).send(JSON.stringify('welcome home'))

})

server.listen(PORT, 'localhost', ()=>{
    console.log(`Server is listen on Port http://localhost:${PORT}`)
})