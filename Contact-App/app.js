const yargs = require("yargs");


yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: "Nomor Handphone",
            demandOption: true,
            type: 'string'
        }
    }
});

yargs.parse();
























// const {pertanyaan,simpanContact} = require('./contacts');
// const main = async() => {
//     const nama = await pertanyaan('Masukkan nama anda: ');
//     const noHP = await pertanyaan('Masukkan nomor HP anda: ');
//     const email = await pertanyaan('Masukkan email anda: ');

//     simpanContact(nama,noHP,email);
// };

// main();