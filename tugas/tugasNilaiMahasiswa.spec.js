const { expect } = require('chai')
const { cek, nilaiAkhir } = require('./tugasNilaiMahasiswa')
const { describe, it } = require('mocha')

describe('FT_001_NILAI AKHIR MAHASISWA', function () {
    describe('Positive Unit Test', function (){
        describe('001_Menampilkan Grade Nilai dengan Rentang >= 80 dan <= 100 , Nilai = 80', function () {
            it('Mahasiswa mendapatkan grade : A', function(){
                const grade = nilaiAkhir(80)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : A')
            })
        })
        describe('002_Menampilkan Grade Nilai dengan Rentang >= 80 dan <= 100 , Nilai = 100', function () {
            it('Mahasiswa mendapatkan grade : A', function(){
                const grade = nilaiAkhir(100)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : A')
            })
        })
        describe('003_Menampilkan Grade Nilai dengan Rentang >= 60 dan < 80 , Nilai = 60', function () {
            it('Mahasiswa mendapatkan grade : B', function(){
                const grade = nilaiAkhir(60)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : B')
            })
        })
        describe('004_Menampilkan Grade Nilai dengan Rentang >= 60 dan < 80 , Nilai = 79', function () {
            it('Mahasiswa mendapatkan grade : B', function(){
                const grade = nilaiAkhir(79)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : B')
            })
        })
        describe('005_Menampilkan Grade Nilai dengan Rentang >= 40 dan < 60 , Nilai = 40', function () {
            it('Mahasiswa mendapatkan grade : C', function(){
                const grade = nilaiAkhir(40)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : C')
            })
        })
        describe('006_Menampilkan Grade Nilai dengan Rentang >= 40 dan < 60 , Nilai = 59', function () {
            it('Mahasiswa mendapatkan grade : C', function(){
                const grade = nilaiAkhir(59)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : C')
            })
        })
        describe('007_Menampilkan Grade Nilai dengan Rentang >= 20 dan < 40 , Nilai = 20', function () {
            it('Mahasiswa mendapatkan grade : D', function(){
                const grade = nilaiAkhir(20)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : D')
            })
        })
        describe('008_Menampilkan Grade Nilai dengan Rentang >= 20 dan < 40 , Nilai = 39', function () {
            it('Mahasiswa mendapatkan grade : D', function(){
                const grade = nilaiAkhir(39)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : D')
            })
        })
        describe('009_Menampilkan Grade Nilai dengan Rentang > 0 dan < 20 , Nilai = 1', function () {
            it('Mahasiswa mendapatkan grade : E', function(){
                const grade = nilaiAkhir(1)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : E')
            })
        })
        describe('010_Menampilkan Grade Nilai dengan Rentang > 0 dan < 20 , Nilai = 19', function () {
            it('Mahasiswa mendapatkan grade : E', function(){
                const grade = nilaiAkhir(19)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : E')
            })
        })
        describe('011_Menampilkan Grade Nilai dengan Nilai = 0', function () {
            it('Mahasiswa mendapatkan grade : F', function(){
                const grade = nilaiAkhir(0)
                expect(grade).to.equal('Mahasiswa mendapatkan grade : F')
            })
        })    
    })
    
    describe('Negative Unit Test', function(){
        describe('012_Mencoba memasukkan nilai < 0 , Nilai = -1' , function(){
            it('Nilai Tidak Boleh Kurang dari 0', function(){
                const grade = cek(-1)
                expect(grade).to.equal('Nilai Tidak Boleh Kurang dari 0')
            })
        })
        describe('013_Mencoba memasukkan nilai > 100 , Nilai = 101', function(){
            it('Nilai Tidak Boleh Lebih dari 100', function(){
                const grade = cek(101)
                expect(grade).to.equal('Nilai Tidak Boleh Lebih dari 100')
            }) 
        })
        describe('014_Mencoba tidak mengisi nilai , Nilai = ', function(){
            it('Nilai Harus Diisi', function(){
                const grade = cek('')
                expect(grade).to.equal('Nilai Harus Diisi')
            })
        })
        describe('015_Mencoba mengisi dengan String , Nilai = ini string', function(){
            it('Input Dilarang String', function(){
                const grade = nilaiAkhir('ini string')
                expect(grade).to.equal('Input Dilarang String !')
            })
        })
    })
})