const express = require('express');

const app = express();

// Setting up the server


// Use middleware
// app.use()

// GET METHOD
app.get('/', (req, res)=>{
    // console.log(req)
    // res.send('Hello Express').status(200)
    return res.status(200).json({message: 'Hello'})
})

app.post('/express', (req, res)=>{
    const user = {
        name: 'Samuel',
        age: 99
    }
    return res.status(200).json({message: 'sent successfully'})
})

app.listen(3000, ()=>{
    console.log('Server is running')
})