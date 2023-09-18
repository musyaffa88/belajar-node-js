const { expect } = require('chai')
const should = require('chai').should()

expect('BAMBANG'.toLowerCase()).to.include('bang')

// if (1 > 2) {}
// else {
// 	throw new Error('nama errornya')
// }

// expect(1).to.be.greaterThan(2)

// expect(1 + 1).to.be.a('number').which.is.equal(2)

// expect({ nama: 'Abid', umur: 20 })
// 	.to.include({ nama: 'Abid' })

// myOrder.status.should.be.equal('PLACED')
// expect(isConfirmationEmailRecevied).to.be.true

// var angka = 1
// angka.should.be.within(0, 3)

// const car = {
// 	parts: {
// 		window: {
// 			color: 'red'
// 		}
// 	}
// }
// expect(car.parts.window.color).to.be.a('string').and.to.equal('red')