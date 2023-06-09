let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let conf = {
	entry: [
        './src/index.js',
        './src/index.css'
    ],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		publicPath: '/dist/'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '.'),
		}
	},
	module: {
		rules: [
			{
				test: /\.js$|jsx/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  "style-loader",
				  "css-loader",
				  "sass-loader",
				],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		],
	},
	plugins: [ 
		new MiniCssExtractPlugin({
			filename: 'index.css'
		})
	]
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	return conf;
}