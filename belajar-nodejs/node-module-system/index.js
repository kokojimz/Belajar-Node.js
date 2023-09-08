//const fs = require('fs'); //core module
//const cetakNama = require('./coba'); // local module
//const moment = require('moment'); // third party module / npm module 

const{cetakNama,hobi,mahasiswa,Orang} = require('./coba');

const jamet = new Orang();
console.log(cetakNama('Rizky'),hobi);
console.log(mahasiswa.cetakMhs());
console.log(jamet);