module.exports = {
  entry: './src/index.jsx',

  output: {
    path: __dirname,
    filename: '/public/bundle.js',
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
        test: /\.jsx$/,
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};