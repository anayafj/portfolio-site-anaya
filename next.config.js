const path = require('path');

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

// module.exports = {
// 	module: {
// 		rules: [
// 			{
// 				test: /\.scss$/,
// 				use: ['style-loader', 'css-loader', 'sass-loader'],
// 			},
// 			// ...
// 		],
// 	},
// };
