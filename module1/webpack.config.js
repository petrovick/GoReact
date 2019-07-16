const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: { // Transpilação do babel
    rules: [{
      test: /\.js$/, // Todos arquivos JS
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader', // vai ler as configs do .babelrc
      },
    },
    {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
      ],
    },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};
