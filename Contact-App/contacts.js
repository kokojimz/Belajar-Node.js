const fs = require('node:fs');
const readline = require('node:readline');

const log = console.log;
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

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

const pertanyaan = (question) => {
    return new Promise((resolve,rejects) => {
        rl.question(question, (nama) => {
            resolve(nama);
        });
    });
};

const simpanContact = (nama,noHP,email) => {
    const contac = {nama,noHP,email};
    const file = fs.readFileSync(dataPath,'utf-8');
    const contacs = JSON.parse(file);
    contacs.push(contac);

    fs.writeFile(dataPath,JSON.stringify(contacs), (err) => {
        if (err) log(err);
        log('The file has been saved!');
    }); 
    rl.close();
};

module.exports = {pertanyaan,simpanContact};