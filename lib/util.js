var prettyjson = require('prettyjson')

exports.pp = function(node) {
  console.log(prettyjson.render(node))
}
