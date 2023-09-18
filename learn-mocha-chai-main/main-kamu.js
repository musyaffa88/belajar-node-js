let apakahError = true
let hasilPrompt = prompt('nanana?')

while (apakahError) {
	const errorMsg = testWrongInput(hasilPrompt)

	if (errorMsg) {
		hasilPrompt = prompt('nanana?')
		console.log(errorMsg)
	} else {
		apakahError = false
	}
}

function testWrongInput(hasilPrompt) {
	if (hasilPrompt > 100) {
		return 'nggak boleh lebih dari 100'
	}
}