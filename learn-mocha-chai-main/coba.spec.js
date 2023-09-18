const { expect } = require('chai')

describe('FT_002_HISTORY', function () {
	before(function () {
		console.log('saya jalan sebelum semuanya ditest')
	})

	beforeEach(function () {
		console.log('saya jalan sebelum setiap test')
	})

	describe('HIST_001 Percobaan cari data', function () {
		it('Menampilkan data yang terdapat variabel mayang', function () {
			expect(1).to.equal(1)
		})
		it('Website tidak error', function () {
			expect(1).to.equal(1)
		})
	})

	describe.skip('HIST_002 Percobaan Filter Data', function () {
		it('Menampilkan data yang sesuai filter', function () {
			expect(1).to.equal(1)
		})
	})
})