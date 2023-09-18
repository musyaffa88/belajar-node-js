const { expect } = require('chai')
const { cek, nilaiAkhir } = require('./tugasNilaiMahasiswa')
const { describe, it } = require('mocha')

describe('FT_001_NILAI AKHIR MAHASISWA', function () {
    describe('001_Mencoba Memasukkan Data dengan Benar', function(){
        it('Menampilkan Grade Nilai dengan Rentang >= 80 dan <= 100 , Nilai = 80', function(){
            const grade = nilaiAkhir(80)
            expect(grade).to.equal('Mahasiswa mendapatkan grade : A')
        })
        it('Menampilkan Grade Nilai dengan Rentang >= 60 dan < 80 , Nilai = 60' , function(){
            const grade = nilaiAkhir(60)
            expect(grade).to.equal('Mahasiswa mendapatkan grade : B')
        }) 
        it('Menampilkan Grade Nilai dengan Rentang >= 40 dan < 60 , Nilai = 40', function(){
            const grade = nilaiAkhir(40)
            expect(grade).to.equal('Mahasiswa mendapatkan grade : C')
        })
        it('Menampilkan Grade Nilai dengan Rentang >= 20 dan < 40 , Nilai = 20', function(){
            const grade = nilaiAkhir(20)
            expect(grade).to.equal('Mahasiswa mendapatkan grade : D')
        })
        it('Menampilkan Grade Nilai dengan Rentang > 0 dan < 20 , Nilai = 1', function(){
            const grade = nilaiAkhir(1)
            expect(grade).to.equal('Mahasiswa mendapatkan grade : E')
        })
        it('Menampilkan Grade Nilai dengan Nilai = 0 , Nilai = 0', function(){
            const grade = nilaiAkhir(0)
            expect(grade).to.equal('Mahasiswa mendapatkan grade : F')
        })
    })

    describe('002_Mencoba Memasukkan Data yang Salah', function(){
        it('Mencoba memasukkan nilai < 0 , Nilai = -1', function(){
            const grade = cek(-1)
            expect(grade).to.equal('Nilai Tidak Boleh Kurang dari 0')
        })
        it('Mencoba memasukkan nilai > 100 , Nilai = 101', function(){
            const grade = cek(101)
            expect(grade).to.equal('Nilai Tidak Boleh Lebih dari 100')
        }) 
        it('Mencoba tidak mengisi nilai , Nilai = ', function(){
            const grade = cek('')
            expect(grade).to.equal('Nilai Harus Diisi')
        })
        it('Mencoba mengisi dengan String , Nilai = ini string', function(){
            const grade = nilaiAkhir('ini string')
            expect(grade).to.equal('Input Dilarang String !')
        })
    })
})