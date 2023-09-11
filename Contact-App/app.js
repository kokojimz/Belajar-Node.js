const {pertanyaan,simpanContact} = require('./contacts');

const main = async() => {
    const nama = await pertanyaan('Masukkan nama anda: ');
    const noHP = await pertanyaan('Masukkan nomor HP anda: ');
    const email = await pertanyaan('Masukkan email anda: ');

    simpanContact(nama,noHP,email);
};

main();