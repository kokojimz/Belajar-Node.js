const fs = require('node:fs');
const chalk = require('chalk');
const validator = require('validator');

const log = console.log;

//membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//membuat file data jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]'); 
}

const simpanContact = (nama,noHP,email) => {
    const contac = {nama,noHP,email};
    const file = fs.readFileSync(dataPath,'utf-8');
    const contacs = JSON.parse(file);

    //cek duplikat
    const duplikat = contacs.find((contact) => contact.nama === nama);
    if (duplikat){
        log(chalk.red.inverse.bold(chalk`Nama ${nama} sudah terdaftar,silahkan gunakan nama lain!`));
        return false;
    }

    //cek email
    if(email){
        if(!validator.isEmail(email)) {
            log(chalk.red.inverse.bold('Email anda tidak valid'));
            return false;
        }
    }

    //cek noHP
    if(!validator.isMobilePhone(noHP,'id-ID')) {
        log(chalk.red.inverse.bold('nomor HP anda tidak valid'));
        return false;
    }

    contacs.push(contac);

    fs.writeFile(dataPath,JSON.stringify(contacs), (err) => {
        if (err) log(err);
        log(chalk.green.inverse.bold('The file has been saved!'));
    });
};

module.exports = {simpanContact};