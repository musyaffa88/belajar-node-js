let output

function cekInput(nilai) {
  if (nilai < 0) {
    output = 'Nilai Tidak Boleh Kurang dari 0'
  }else if(nilai > 100){
    output = 'Nilai Tidak Boleh Lebih dari 100'
  }else if(nilai == ''){
    output = 'Nilai Harus Diisi'
  }

return output
}

function grade(nilai) {
  if (nilai >= 80 && nilai <= 100) {
    output = 'Mahasiswa mendapatkan grade : A'
  } 
  else if (nilai >= 60 && nilai < 80) {
    output = 'Mahasiswa mendapatkan grade : B'
  } 
  else if (nilai >= 40 && nilai < 60) {
    output = 'Mahasiswa mendapatkan grade : C'
  } 
  else if (nilai >= 20 && nilai < 40) {
    output = 'Mahasiswa mendapatkan grade : D'
  } 
  else if (nilai > 0 && nilai < 20){
    output = 'Mahasiswa mendapatkan grade : E'
  } 
  else if(nilai == 0){
    output = 'Mahasiswa mendapatkan grade : F'
  }
  else{
    output = 'Input Dilarang String !'
  }
return output
}



exports.cek = cekInput
exports.nilaiAkhir = grade
