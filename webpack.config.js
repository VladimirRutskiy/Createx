const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        historyApiFallback: true,
        static: './',
        open: true,
        compress: true,
        hot: true,
        port: 8081,
    },
};

module.exports = ({ development }) => ({
  mode: development ? "development" : "production",
  devtool: "source-map",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "assets/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        loader: 'file-loader',
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader",],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        use: [{
        loader: 'html-loader'
        }, {
        loader: 'pug-html-loader',
        options: {
        exports: false
        }
        }]
        },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "courses.html",
      template: "./src/courses.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.pug",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // new CopyPlugin({
    //     patterns: [
    //       { from: 'public' },
    //     ],
    //   }),
  ],
  ...devServer(development),
});
