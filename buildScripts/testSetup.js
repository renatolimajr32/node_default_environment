// This file ins't transpiled, so must use CommomJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't undertand
require.extensions['.css'] = function() {};
