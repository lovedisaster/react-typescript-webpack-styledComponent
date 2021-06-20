var { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackTagsPlugin = require("html-webpack-tags-plugin");
const { join, resolve } = require("path");
const { Configuration, DllReferencePlugin } = require("webpack");
const { webpack } = require("webpack");

module.exports = (_env, args) => {
  // Define plugin is not working with webpack 5 but to be researched later.
  // const webpackDefinPlugin = new webpack.DefinePlugin({
  //   GS: JSON.stringify(GlobalStyles),
  // });

  const commonConfig = {
    entry: {
      app: "./src/ts/index.tsx",
    },
    mode: args.mode || "development",
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/i,
          loader: "ts-loader",
        },
        {
          test: /\.(pdf|png|jpg|jpeg|gif|svg)$/,
          use: "file-loader",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  // Config for development
  const devConfig = {
    devServer: (() => {
      return {
        contentBase: join(__dirname, "dev"),
        host: "0.0.0.0",
        hotOnly: true,
        inline: true,
        publicPath: "/",
      };
    })(),
    devtool: "eval-source-map",
    mode: "development",
    output: {
      // You can use absolute-resource-path if you want to see the full path in the fs
      devtoolModuleFilenameTemplate: "sources://[resource-path]",
      filename: "[name].js",
      path: join(__dirname, "/dev"),
      publicPath: "/",
    },
    plugins: [
      args.env.WEBPACK_SERVE && new ReactRefreshWebpackPlugin(),
      new HTMLWebpackPlugin({
        filename: "index.html",
        inject: true,
        template: join(__dirname, "/src/html/index.html"),
        title: "Webpack TypeScript",
      }),
    ].filter(Boolean),
  };

  // Config for production
  const prodConfig = {
    devtool: "source-map",
    output: {
      filename: "[name].[fullhash].js",
      path: join(__dirname, "/dist"),
      publicPath: "/",
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [join(__dirname, "/dist/app.*.*"), join(__dirname, "/dist/styles.*.*")],
        verbose: true,
      }),
      new HTMLWebpackPlugin({
        filename: "index.html",
        inject: "body",
        minify: {
          collapseWhitespace: true,
          html5: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
        },
        template: join(__dirname, "/src/html/index.html"),
        title: "Webpack TypeScript",
      }),
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        minRatio: 0.8,
        test: /\.(js|html|css)$/,
        threshold: 10240,
      }),
    ].filter(Boolean),
  };

  return { ...commonConfig, ...(args.mode === "production" ? prodConfig : devConfig) };
};
