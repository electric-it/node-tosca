var prettyjson = require('prettyjson');

exports.build_node = function() {
  return {
    node_types : {
      Node : {
        type : 'tosca.nodes.Compute'
      , properties   : {}
      , attributes   : {}
      , requirements : {}
      , capabilities : {}
      , interfaces   : {}
      , artifacts    : {}
      , metadatas    : {}}}}}

node_add = function(node, type, name, value) {
  var props = node['node_types']['Node'][type]
  var new_props = {}
  new_props[name] = value
  Object.assign(props, new_props)
  node['node_types']['Node'][type] = props
  return node
}


exports.node_add_property = function(node, name, value) {
  return node_add(node, 'properties', name, value)
};

exports.node_add_attribute = function(node, name, value) {
  return node_add(node, 'attributes', name, value)
};

exports.node_add_requirement = function(node, name, value) {
  return node_add(node, 'requirements', name, value)
}

exports.node_add_capability = function(node, name, value) {
  return node_add(node, 'capabilities', name, value)
}

exports.node_add_interface = function(node, name, value) {
  return node_add(node, 'interfaces', name, value)
}

exports.node_add_artifact = function(node, name, value) {
  return node_add(node, 'artifacts', name, value)
}

exports.node_add_metadata = function(node, name, value) {
  return node_add(node, 'metadatas', name, value)
}

exports.pp = function(node) {
  // also could use: process.stdout.write(prettyjson.render(node))
  console.log(prettyjson.render(node))
}
