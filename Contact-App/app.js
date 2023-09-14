const yargs = require("yargs");
const { simpanContact,listContact,detailContact,deleteContact } = require("./contacts");


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
    },
    handler(argv) {
        simpanContact(argv.nama,argv.noHP,argv.email);
    }
}).demandCommand();

//menampilkan daftar semua nama & no HP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        listContact();
    }
});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail contact',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        detailContact(argv.nama);
    }
});

//menghapus data sebuah contact
yargs.command({
    command: 'delete',
    describe: 'Menghapus data contact',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        deleteContact(argv.nama);
    }
});

yargs.parse();