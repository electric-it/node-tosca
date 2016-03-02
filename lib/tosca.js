var node = require('./node')
var instance = require('./instance')

exports.node_build = node.build_node
exports.node_add_property = node.add_property
exports.node_add_attribute = node.add_attribute
exports.node_add_requirement = node.add_requirement
exports.node_add_capability = node.add_capability
exports.node_add_artifact = node.add_artifact
exports.node_add_metadata = node.add_metadata

exports.instance_build = instance.build
exports.instance_add_state = instance.add_state
exports.instance_add_property = instance.add_property

exports.pp = node.pp
