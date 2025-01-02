const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src'),
    },
  },
  vitest: {
    alias: {
      '@/*': path.resolve(__dirname, './src/*'), 
      '~/*': path.resolve(__dirname, './src/*'), 
    }
  },
  jest: {
    alias: {
      '@/*': path.resolve(__dirname, './src/*'), 
      '~/*': path.resolve(__dirname, './src/*'), 
    }
  }
};