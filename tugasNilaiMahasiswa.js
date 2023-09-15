const prompt = require('prompt-sync')()

let input_again = true;
let nilai = prompt('Nilai Mahasiswa : ');
while (input_again) {
      if (nilai < 0 || nilai > 100 || nilai == "" ){
            console.log('Nilai Tidak Boleh Kurang dari 0 atau Lebih dari 100 dan Tidak Boleh Kosong');
            console.log('======================================');
            console.log('Masukkan Ulang Nilai Mahasiswa');
            nilai = prompt('Nilai Mahasiswa : ');
            input_again = true;
        } else{
            if (nilai >= 80 && nilai <= 100) {
              console.log('Mahasiswa mendapatkan grade : A');
              console.log('======================================');
              input_again = false;
              } else if (nilai >= 60 && nilai < 80) {
                console.log('Mahasiswa mendapatkan grade : B');
                console.log('======================================');
                input_again = false;
              } else if (nilai >= 40 && nilai < 60) {
                console.log('Mahasiswa mendapatkan grade : C');
                console.log('======================================');
                input_again = false;
              } else if (nilai >= 20 && nilai < 40) {
                console.log('Mahasiswa mendapatkan grade : D');
                console.log('======================================');
                input_again = false;
              } else if (nilai > 0 && nilai < 20){
                console.log('Mahasiswa mendapatkan grade : E');
                console.log('======================================');
                input_again = false;
              } else if(nilai == 0){
                console.log('Mahasiswa mendapatkan grade : F');
                console.log('======================================');
                input_again = false;
              } else {
                console.log("Anda tidak memasukkan nilai mahasiswa dengan benar");
                console.log('======================================');
                console.log('Masukkan Ulang Nilai Mahasiswa');
                nilai = prompt('Nilai Mahasiswa : ');
                input_again = true;
              }
          }
}