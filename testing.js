const { revertString } = require('../square.js')

describe('tests for revertString function', () => {

	it('should reverse string', () => {
		expect(revertString('world')).toBe('world')
	})

	it('should reverse string', () => {
		expect(revertString('abc')).toHaveLength(3)
	})

	it('should reverse string', () => {

		let paramReference = 'DLROW'
		expect(revertString("world")).toBe(paramReference.toLowerCase())
	})

	it('should reverse string', () => {
		let paramBig = 'DLROW'
		expect(revertString("world")).toBe(paramBig)
	})
})
