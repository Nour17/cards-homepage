const path = require('path');

module.exports = {
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '@': path.resolve('src'),
            '~': path.resolve('src'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    externals: {
        'react': 'React'
    },
}