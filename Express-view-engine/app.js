const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

//using ejs
app.set('view engine','ejs');
app.use(expressLayouts);

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
        layout : 'layouts/main-layout.ejs',
        nama: "Reynaldy",
        title: 'Halaman Home',
        mahasiswa
    });
});
app.get('/about', (req, res) => {
    res.render('about',{
        layout : 'layouts/main-layout.ejs',
        title: 'Halaman About'
    });
});
app.get('/contact', (req, res) => {
    res.render('contact',{
        layout : 'layouts/main-layout.ejs',
        title: 'Halaman Contact'
    });
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