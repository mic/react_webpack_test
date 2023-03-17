const fs = require("fs");
const path = require("path");

const createConfigFromJSON = () => {
	const configBuffer = fs.readFileSync(
		path.resolve("pdfConfig.json"),
		(err: any, data: any) => {
			if (err) throw err;
			data;
		}
	);
	const configObj = JSON.parse(configBuffer);

	return {
		config: {
			http: configObj["http"],
			mdgAPIKey: configObj["mdg-api-key"],
			mdgURL: configObj["mdg-url"],
			pdfServerURL: configObj["pdf-server-url"],
			gqlPlayground: configObj["gql-playground"],
			pdfOutDir: configObj["pdf-out-dir"],
			gatsbyOutDir: configObj["gatsby-out-dir"],
		},
	};
};

module.exports = { createConfigFromJSON };
