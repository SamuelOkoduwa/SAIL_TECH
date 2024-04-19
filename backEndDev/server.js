const fs = require('fs');

// Write to a file
fs.writeFile('Sample.txt', 'Hello', (err, data)=>{
   if (err){
    console.log(err)
   } else{
    console.log('File created successfully');
   }
})

// Read a file
// fs.readFile('Sample.txt', {encoding: 'utf-8'}, (err, data)=>{
//     // if (err) console.log(err)
//     // console.log(data)
//     if (err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

// append file
fs.appendFile('Sample.txt', '<p>This is how to append</p>', (err, data)=> {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})