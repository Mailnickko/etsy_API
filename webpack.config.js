const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    './client/main'
  ],
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: 'client',
    port: 4000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.join(__dirname, 'client', 'styles')
      }
    ]
  }
}
