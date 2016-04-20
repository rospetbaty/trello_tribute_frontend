module.exports = {
  entry: {
    app: './src/app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //exclude: [/node_modules/, /bower_components/],
        loaders: ['babel-loader']
      }
    ]
  }
};
