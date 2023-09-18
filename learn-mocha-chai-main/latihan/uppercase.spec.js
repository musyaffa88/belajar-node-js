const { expect } = require('chai')
const uppercase = require('./uppercase')

describe('ketika saya masukin huruf kecil', function () {
	it('keluar huruf besar', function () {
		const cobaHurufBesar = uppercase('bambang')
		expect(cobaHurufBesar).to.equal('BAMBANG')
	})
})