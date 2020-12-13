export const prettyTruncate = (str = '', len = 8) => {
	if (str.length > len) {
		return `${str.slice(0, len)}...`
	}
	return str
}
