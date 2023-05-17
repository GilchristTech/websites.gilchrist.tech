module.exports = function (config) {
	config.addFilter("getAttr", (arr, attribute) => {
		if (Array.isArray(arr)) {
			return arr.map(e => e[attribute]);
		}

		return arr[attribute];
	});

	config.addFilter(
		"findAttr", (arr, attribute, value) => arr.find(e => e[attribute] === value)
	);
}
