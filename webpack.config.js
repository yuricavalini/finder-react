const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
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
  ],
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

module.exports = config
