//Core Module
//File system
const fs = require('node:fs');

//menuliskan string ke file secara synchronous
fs.writeFileSync('apple/test.txt', 'halo nama saya aldy\neh tapi boong hiya hiya');

//menuliskan string ke file secara Asynchronous
fs.writeFile('apple/message.txt', 'Halo dek nama saya aldy\n eh tapi boong wkwk', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 

//membuat folder secara asynchronous
fs.mkdir('apple', { recursive: true }, (err) => {
    if (err) throw err;
});