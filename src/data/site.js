const ENV = (process.env.NODE_ENV || process.env.ENV || "development").toLowerCase();

let domain;

switch (ENV) {
	case "dev":
	case "development":
		domain = "http://localhost:8080";  // TODO: see if it's possible to programmatically get the port
		break;

	case "build":
	case "production":
		domain = "https://websites.gilchrist.tech";
		break;

	default:
		throw Error("ENV environment variable not recognized: ", ENV);
		break;
}


const links = {
	// miniwebsites: "https://websites.gilchrist.tech/mini/",
	// developer: "https://dev.gilchrist.tech/",
	packages: "/packages",
	contact:  "/contact",
	packages: "/packages",
};

module.exports = {
	name:      "Gilchrist.tech",
	copyright: "Gilchrist Pitts",

	domain,
	links,

	navigation: [
		[ "Home",      "/"             ],
		[ "Contact",   links.contact   ],
		[ "Packages",  links.packages  ],
	],
};
