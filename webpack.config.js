const path = require('path')

module.exports = {
    entry: './dist/src/client.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    }
}