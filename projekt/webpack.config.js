const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "index.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Source Sans Pro" },
        { family: "Roboto", variants: ["100", "300", "400", "500", "700"] }
      ]
    })
  ]
}

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              outputPath: 'assets/img',
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{
        from: 'src/assets',
        to: 'assets',
        noErrorOnMissing: true,
      }],
    }),
  ],
};