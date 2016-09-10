var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var resolvPath = function(componentPath) {
  return path.join(__dirname, componentPath);
};

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

var entry = {
  index: ['./src/public/js/index']
};

var loaders = [
  {
    test: /\.css$/,
    loader: 'style!css',
    exclude: /node_modules/
  },
  {
    test: /\.scss$/,
    loader: 'style!css!sass?includePaths[]=' + resolvPath('./src/public/scss'),
    exclude: /node_modules/
  }
];

plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      unsafe: true,
      warnings: false
    },
    output: {
      comments: false
    }
  })
);
loaders.push({
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: {
    cacheDirectory: true,
    presets: ['es2015', 'react'],
    plugins: [
      'transform-es2015-destructuring',
      'transform-proto-to-assign',
      'transform-object-assign',
      [
        'transform-es2015-classes',
        {
          'loose': true
        }
      ]
    ]
  }
});

module.exports = [
  {
    devtool: process.env.NODE_ENV !== 'production' ? 'inline-source-map' : '',

    entry: entry,

    output: {
      path: path.join(__dirname, './src/public/dist/js/'),
      filename: '[name].js'
    },

    module: {
      loaders: loaders
    },

    node: {
      Buffer: false
    },

    plugins: plugins,

    postcss: () => [autoprefixer, precss],

    resolve: {
      alias: {
        app: resolvPath('./src/app'),
        styles: resolvPath('./src/public/scss')
      }
    }
  },
  {
    devtool: process.env.NODE_ENV !== 'production' ? 'inline-source-map' : '',

    entry: [
      './src/app/application.js'
    ],

    output: {
      path: path.join(__dirname, './src/public/dist/js/application/'),
      filename: '[name]_application_bundle.js',
      libraryTarget: 'commonjs2'
    },

    module: {
      loaders: loaders
    },

    node: {
      Buffer: false
    },

    plugins: plugins,

    postcss: () => [autoprefixer, precss],

    resolve: {
      alias: {
        app: resolvPath('./src/app'),
        styles: resolvPath('./src/public/scss')
      }
    }
  }
];

