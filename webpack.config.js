const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const lessAdditionalData = `
@import "${path.resolve(__dirname, "src/styles/variables.less")}";
@import "${path.resolve(__dirname, "src/styles/mixins.less")}";
`;

const lessLoader = {
  loader: "less-loader",
  options: {
    additionalData: lessAdditionalData
  }
};

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.module\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
          },
          lessLoader
        ]
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: ["style-loader", "css-loader", lessLoader]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      title: "行野 Travel Circle"
    })
  ],
  devServer: {
    static: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    hot: true,
    port: 3000
  }
};
