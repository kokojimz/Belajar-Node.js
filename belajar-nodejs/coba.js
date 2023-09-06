const cetakNama = function (nama){
    return `Halo dek, saya ${nama}`;
}

const hobi = 'hobi saya tidur';

const mahasiswa = {};
mahasiswa.nama = 'reynaldy';
mahasiswa.umur = 19;
mahasiswa.cetakMhs = function(){
    return `halo dek, aku ${this.nama} and aku ${this.umur}`
}

class Orang {
    constructor(){
        console.log('halo dek\n');
    }
}
module.exports = {cetakNama,hobi,mahasiswa,Orang};