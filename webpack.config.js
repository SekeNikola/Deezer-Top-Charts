const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader'
      },
      {
  test: /\.html$/,
    use: [
      {
        loader: "html-loader",
        options: { minimize: true }
      }
    ]
},
{
  test: /\.css$/,
  use: [ 'style-loader', 'css-loader' ]
}
    ]
  },
plugins: [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })
]
};
