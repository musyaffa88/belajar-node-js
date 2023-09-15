const fs = require('fs')
const formatCurr = require('format-currency')
const testFunction = require('./contoh_module_1')
const { biodata, fruits } = require('./contoh_module_2')
const prompt = require('prompt-sync')()

// coba prompt
const jawaban = prompt('berapa hasil dari 1 + 1?')
console.log('jawaban anda: ' + jawaban)

// coba library npm
let uang = formatCurr(10000)
fs.writeFileSync('contoh.txt', 'uang yang sudah terformat: ' + uang)

// module 1
testFunction()

// module 2
console.log(biodata)
console.log(fruits)

// coba process
process.exit()
console.log(process.cwd())