const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: './dist',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/index.html' }],
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.join(__dirname, './.env'),
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
    }),
  ],
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

module.exports = config
