const path = require('path');
module.exports = {
    entry: './src/index.js',
    mode:'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'wingu.min.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
}