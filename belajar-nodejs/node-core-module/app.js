//Core Module
//File system
const fs = require('node:fs');

//menuliskan string ke file secara synchronous
try{
    fs.writeFileSync('apple/test.txt', 'halo nama saya aldy\neh tapi boong hiya hiya');
}catch(e){
    console.log(e);
}

//menuliskan string ke file secara Asynchronous
// fs.writeFile('apple/message.txt', 'Halo dek nama saya aldy\n eh tapi boong wkwk', (err) => {
//     if (err) console.log(err);
//     console.log('The file has been saved!');
// }); 

//membuat folder secara asynchronous
fs.mkdir('apple', { recursive: true }, (err) => {
    if (err) throw err;
});

//membaca isi file secara synchronous
// try{
//     const data = fs.readFileSync('apple/message.txt','utf-8');
//     console.log(data);
// }catch(e){
//     console.log(e);
// }

//membaca isi file secara Asynchronous
// fs.readFile('apple/message.txt','utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// }); 

//Readline di command prompt
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Please enter the first number ', (answer1) => {
    rl.question('Please enter the second number ', (answer2) => {
        var result = (+answer1) + (+answer2);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});