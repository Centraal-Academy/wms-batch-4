const path = require('path');

    module.exports = {
        entry: path.resolve(__dirname, 'index.js'),
        output: {
          path: path.resolve(__dirname, 'build'),
          filename: 'js/build.js',
          publicPath: "./build/",
        },
        module: {
            rules: [
              {
                test: /\.css$/,
                use: [{
                  loader:'style-loader'
              }, {
                  loader:'css-loader'
              }]
              },
              {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader'
                }
              },
              {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 1000000,
                    }
                  }
                ]
              }
            ]
          }
        }