exports.build = function(instance, node) {
    var document = {}
    Object.assign(document, instance)
    Object.assign(document, node)
    return document
}

// todo, format ? 
exports.publish = function(nodes) {
    var document = {tosca_definitions_version: "tosca_simple_yaml_1_0"}
    Object.assign(document, nodes)
    return document
} 
