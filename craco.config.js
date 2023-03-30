const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@core': path.resolve(__dirname, './src/components/core/'),
			'@page': path.resolve(__dirname, './src/components/page/'),
			'@part': path.resolve(__dirname, './src/components/part/'),
			'@config': path.resolve(__dirname, './src/Config/'),
			'@theme': path.resolve(__dirname, './src/Theme/'),
			'@utils': path.resolve(__dirname, './src/Utils/'),
		},
	},
};
