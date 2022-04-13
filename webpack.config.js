require('dotenv/config');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const optimization = () => {
  const config = {}
  if(isProd){
    config.minimizer = [
      new MinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  }

  return config;
}
const plugins = () => {
  const base = [
    new webpack.DefinePlugin({
      'process.env.URL_PATH': JSON.stringify(process.env.URL_PATH || ''),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.IMGUR_CLIENT_ID': JSON.stringify(process.env.IMGUR_CLIENT_ID),
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, 'dist')
      ]
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: "assets/[path][name][ext]",
        },
        {
          from: path.resolve(__dirname, 'src/components/product-form/*.svg'),
          to: "[name][ext]",
        }
      ]
    }),
  ]
  if (isProd){
    base.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    }));
  }
  return base
}

module.exports = {
  target: 'web',
  mode: isDev?'development':'production',
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    styles: path.join(__dirname, 'src/styles/all.css')
  },
  output: {
    publicPath: isDev?'/':('/' + process.env.URL_PATH || ''),
    filename: '[name].bundle.js',
    path: isDev?path.resolve(__dirname, 'dist'):path.resolve(__dirname, 'build'),
    chunkFilename: '[name]-[id].js',
    clean: true,
  },
  devtool: isDev ?'eval-cheap-module-source-map':'source-map',
  optimization: optimization(),
  devServer: {
    port: 9001,
    hot: isDev,
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    devMiddleware: {
      index: true,
      publicPath: '/',
      writeToDisk: true,
    },
    client: {
      progress: true,
      logging: 'log',
    },
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL,
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: [ isDev?'style-loader':{loader: MiniCssExtractPlugin.loader},
          'css-loader'
        ]
      },
      {
        test: /\.(js)?$/,
        use: 'babel-loader',
        exclude: [/(node_modules)/]
      }
    ]
  },

  plugins: plugins(),

}