const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    //res.send('Hello World!');
    // res.json({
    //     nama: 'Aldy',
    //     umur: 19,
    //     noHP: '08162534',
    // });
    res.sendFile('./index.html', {root: __dirname});
});
app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname});
});
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname});
});
app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id}</br>Category ID : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>ERROR 404 NOT FOUND</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// const http = require('node:http');
// const fs = require('node:fs');
// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error: file not found');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     });
// }

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 
//         'Content-Type': 'text/html' 
//     });

//     const url = req.url;
//     if (url === '/about'){
//         renderHTML('./about.html',res);
//     }else if (url === '/contact'){
//         renderHTML('./contact.html',res);
//     }else{
//         renderHTML('./index.html',res);
//     }
// });

// server.listen(port, () => {
//     console.log(`Server listening on port 8000`);
// });