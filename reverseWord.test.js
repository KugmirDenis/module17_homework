import { reversWord } from "./reverseWord";

describe('tests for revertString function', () => {

	it('should reverse string', () => {
		expect(reversWord('hello')).toBe('olleh')
	})

	it('should reverse string', () => {
		expect(reversWord('abc')).toHaveLength(3)
	})

	it('should reverse string', () => {
		let paramReference = 'OLLEH'
		expect(reversWord("hello")).toBe(paramReference.toLowerCase())
	})
})