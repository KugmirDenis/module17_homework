export function reversWord(str) {
	let revertedWord = ''

	for (let i = str.length - 1; i >= 0; i--) {
		revertedWord += str[i]
	}
	return revertedWord.toLowerCase()
}
