var lodash = require('lodash');
var prettyjson = require('prettyjson');


exports.build_node = function() {
   return {"node_types" : { "Node" : {"type" : "tosca.nodes.Compute",
                                      "properties" : {},
                                      "attributes" : {}}}}
};

exports.node_add_property = function(node, name, value) {
    var props = node.node_types.Node.properties;
    var new_props = {};
    new_props[name] = value;
    Object.assign(props, new_props);
    return lodash.set(node, "node_types.Node.properties", props);
};

exports.pp = function(node) {
    // also could use: process.stdout.write(prettyjson.render(node))
    console.log(prettyjson.render(node));
}
