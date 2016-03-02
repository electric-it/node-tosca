exports.build = function() {
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
  var props = node.node_types.Node[type]
  var new_props = {}
  new_props[name] = value
  Object.assign(props, new_props)
  node.node_types.Node[type] = props
  return node
}


exports.add_property = function(node, name, value) {
  return node_add(node, 'properties', name, value)
};

exports.add_attribute = function(node, name, value) {
  return node_add(node, 'attributes', name, value)
};

exports.add_requirement = function(node, name, value) {
  return node_add(node, 'requirements', name, value)
}

exports.add_capability = function(node, name, value) {
  return node_add(node, 'capabilities', name, value)
}

exports.add_interface = function(node, name, value) {
  return node_add(node, 'interfaces', name, value)
}

exports.add_artifact = function(node, name, value) {
  return node_add(node, 'artifacts', name, value)
}

exports.add_metadata = function(node, name, value) {
  return node_add(node, 'metadatas', name, value)
}


