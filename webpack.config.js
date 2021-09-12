const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/platforms/web/entry-runtime.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './mydist')
    },
    mode: development
}