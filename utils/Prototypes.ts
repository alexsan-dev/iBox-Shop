// PROTOTIPO
String.prototype.format = function () {
	return this.trim()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
}

export {}
