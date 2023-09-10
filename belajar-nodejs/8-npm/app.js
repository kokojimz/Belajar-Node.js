const validator = require('validator');
const chalk = require('chalk');

const log = console.log;
//console.log(validator.isEmail('koko@gmail.com'));
// console.log(validator.isMobilePhone('082233434','id-ID'));
// log(validator.isNumeric('082233434'));
log(chalk.bold.red.bgWhite('Hallo dek'));
const merah = "Merah";
const putih = "Putih";
const hijau = "Hijau";
log(chalk`Baju ku berwarna {bold.italic.white.bgRed ${merah}}, 
dan punya kakak ku berwarna {bold.italic.red.bgWhite ${putih}}`
);
