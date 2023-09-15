const prompt = require('prompt-sync')();

const inputNilai = prompt('Nilai Mahasiswa : ');
const nilai = Number(inputNilai);

function nilaiMahasiswa() {
    if (nilai < 0 || nilai > 100){
        console.log('Nilai Tidak Boleh Kurang dari 0 atau Lebih dari 100');
        console.log('======================================');
    } else{
        if (nilai >= 80 && nilai <= 100) {
          console.log('Mahasiswa mendapatlan grade : A');
          console.log('======================================');
          } else if (nilai >= 60 && nilai < 80) {
            console.log('Mahasiswa mendapatlan grade : B');
            console.log('======================================');
          } else if (nilai >= 40 && nilai < 60) {
            console.log('Mahasiswa mendapatlan grade : C');
            console.log('======================================');
          } else if (nilai >= 20 && nilai < 40) {
            console.log('Mahasiswa mendapatlan grade : D');
            console.log('======================================');
          } else if (nilai > 0 && nilai < 20){
            console.log('Mahasiswa mendapatlan grade : E');
            console.log('======================================');
          } else if(nilai == 0){
            console.log('Mahasiswa mendapatlan grade : F');
            console.log('======================================');
          }
      }
}

nilaiMahasiswa(nilai)