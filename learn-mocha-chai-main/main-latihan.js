const prompt = require('prompt-sync')()
const uppercase = require('./latihan/uppercase')

const valueFromUser = prompt('Masukkan kata yang ingin diubah jadi huruf besar: ')
const result = uppercase(valueFromUser)
console.log(result)