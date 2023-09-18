const prompt = require('prompt-sync')()
const { cek, nilaiAkhir } = require('./tugas/tugasNilaiMahasiswa')

let apakahError = true
let nilai = prompt('Nilai Mahasiswa : ');
while (apakahError) {
    if (nilai < 0 || nilai > 100 || nilai == "") {
        const errorMsg = cek(nilai)
		console.log(errorMsg)
		nilai = prompt('Nilai Mahasiswa : ');
	} else {
        const result = nilaiAkhir(nilai)
        console.log(result)
		apakahError = false
	}
}
