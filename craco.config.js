const path = require('path');

module.exports = {
	webpack: {
		alias: {
			src: path.resolve(__dirname, 'src'),
			Components: path.resolve(__dirname, 'src', 'Components'),
			public: path.resolve(__dirname, 'public'),
			Images: path.resolve(__dirname, 'public', 'images')
		}
	}
}