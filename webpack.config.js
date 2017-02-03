module.exports = {
  entry: './src/index.jsx',

  output: {
    path: __dirname,
    filename: '/public/bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
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
      {
        loader: 'style!css',
        test: /\.css?$/,
      },
    ],
  },
};