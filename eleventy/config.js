module.exports = function (config) {
	config.addPlugin(require("eleventy-sass"));
	config.addPlugin(require("./arrays.js"));
	config.addPassthroughCopy("static");

	config.addShortcode("year", () => `${new Date().getFullYear()}`);
	config.addShortcode("log", console.log);

	config.addFilter("search", require("jmespath").search);

	return {
		dir: {
			input:    "src",
			output:   "dist",
			includes: "includes",
			data:     "data"
		}
	};
};
