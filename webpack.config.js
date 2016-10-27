
module.exports = {
  
  entry: ['whatwg-fetch', __dirname + '/client/src/main.js'],
  output: {
    path: __dirname + '/client/dist/js',
    filename: 'app.js'
  },
  module: {

    loaders: [
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader!' 
      },

      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
  
      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      }

    ]
  },
};
