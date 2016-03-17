var objectAssign = require('object-assign')

exports.build = function() {
  return {
    node_instance : {
      properties : {}
    }
  }
}

exports.add_property = function(node, name, value) {
  var props = node.node_instance.properties
  var new_props = {}
  new_props[name] = value
  objectAssign(props, new_props)
  node.node_instance.properties = props
  return node
}

exports.add_state = function(node, value) {
  node.node_instance.state = value
  return node
}
