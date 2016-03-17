var objectAssign = require('object-assign')

exports.build = function(instance, node) {
    var document = {}
    objectAssign(document, instance)
    objectAssign(document, node)
    return document
}

// todo, format ? 
exports.publish = function(nodes) {
    var document = {tosca_definitions_version: "tosca_simple_yaml_1_0"}
    objectAssign(document, nodes)
    return document
} 
