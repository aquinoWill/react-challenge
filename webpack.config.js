const path = require('path')

module.exports = {
  resolve: {
    extensions: ['ts', 'tsx', 'js', 'jsx'],
    alias: {
      'pages': path.resolve(__dirname, 'src/pages'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'components': path.resolve(__dirname, 'src/components')
    }
  }
}
