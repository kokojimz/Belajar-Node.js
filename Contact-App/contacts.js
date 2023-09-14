const fs = require('node:fs');
const chalk = require('chalk');
const validator = require('validator');
const path = require('node:path');

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

//read filecontacts.json
const readFile = (path) => {
    const file = fs.readFileSync(path,'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

const simpanContact = (nama,noHP,email) => {
    const contact = {nama,noHP,email};
    const contacts = readFile(dataPath);

    //cek duplikat
    const duplikat = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
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

    contacts.push(contact);

    fs.writeFile(dataPath,JSON.stringify(contacts), (err) => {
        if (err) log(err);
        log(chalk.green.inverse.bold('The file has been saved!'));
    });
};

const listContact = () => {
    const contacts = readFile(dataPath);
    log(chalk.cyan.inverse.bold('Daftar Contact : '));
    contacts.forEach((element,i) => {
        log(`${i+1}. nama : ${element.nama}\n   no HP : ${element.noHP}\n`);
    });
};

const detailContact = (nama) => {
    const contacts = readFile(dataPath);
    const kontak = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    if (!kontak){
        log(chalk.red.inverse.bold(`Nama ${nama} tidak ditemukan!`));
        return false;
    }
    log(chalk.cyan.inverse.bold(`Nama : ${kontak.nama}`));
    log(chalk.cyan.inverse.bold(`Nomor HP : ${kontak.noHP}`));
    if(kontak.email) log(chalk.cyan.inverse.bold(`Email : ${kontak.email}`));
};

const deleteContact = (nama) => {
    const contacts = readFile(dataPath);
    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() != nama.toLowerCase());

    if(contacts.length === newContacts.length){
        log(chalk.red.inverse.bold(`Nama ${nama} tidak ditemukan!`));
        return false;
    }
    fs.writeFile(dataPath,JSON.stringify(newContacts), (err) => {
        if (err) log(err);
        log(chalk.green.inverse.bold('The file has been saved!'));
    });
};

module.exports = {simpanContact,listContact,detailContact,deleteContact};