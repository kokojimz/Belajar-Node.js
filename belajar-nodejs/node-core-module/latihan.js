const fs = require('node:fs');

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan nomor HP anda: ', (noHP) => {
        const contac = {nama,noHP};
        const file = fs.readFileSync('apple/contacts.json','utf-8');
        const contacs = JSON.parse(file);
        contacs.push(contac);

        fs.writeFile('apple/contacts.json',JSON.stringify(contacs), (err) => {
            if (err) console.log(err);
            console.log('The file has been saved!');
        }); 

        rl.close();
    });
});