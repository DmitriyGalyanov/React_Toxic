const path = require('path');

module.exports = {
	webpack: {
		alias: {
			src: path.resolve(__dirname, 'src'),
			Components: path.resolve(__dirname, 'src', 'Components'),
			pages: path.resolve(__dirname, 'src', 'pages'),
			images: path.resolve(__dirname, 'src', 'images'),
			Redux: path.resolve(__dirname, 'src', 'redux'),
			actions: path.resolve(__dirname, 'src', 'redux', 'actions'),
			middlewares: path.resolve(__dirname, 'src', 'redux', 'middlewares')
		}
	}
}