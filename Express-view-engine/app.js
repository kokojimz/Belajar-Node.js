const express = require('express')
const app = express()
const port = 3000

//using ejs
app.set('view engine','ejs');


app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname});
    const mahasiswa = [
        {
            nama : 'Aldy',
            noHP : '0812345',
            email : 'Aldy@gmail.com'
        },
        {
            nama : 'Ziddan',
            noHP : '0812345',
            email : 'Ziddan@gmail.com'
        },
        {
            nama : 'Ihsan',
            noHP : '0812345',
            email : 'Ihsan@gmail.com'
        }
    ];
    res.render('index',{
        nama: "Reynaldy",
        title: 'Halaman Home',
        mahasiswa
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
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