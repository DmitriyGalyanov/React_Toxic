const path = require('path');

module.exports = {
	webpack: {
		alias: {
			src: path.resolve(__dirname, 'src'),
			Components: path.resolve(__dirname, 'src', 'Components'),
			pages: path.resolve(__dirname, 'src', 'pages'),
			images: path.resolve(__dirname, 'src', 'images')
		}
	}
}