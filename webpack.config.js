

var path = require('path');
var config = {
    context: __dirname,
    entry: {
      javascript: "./js/app.js",
      html: "./index.html",
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            query: {
              presets: ['react', 'es2015']
            }
        },
        {
  	  test: /\.html$/,
  	  loader: "file?name=[name].[ext]"
	}]
    },

};

module.exports = config;
