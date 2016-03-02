const test = require('tape');
const tosca = require('../tosca.js');

test('assert building a node with 1 property', function(t) {
  t.plan(2)
    
  const node = tosca.build_node();
  t.equal(typeof node, 'object', 'assert node is object')

  const node_with_props = tosca.node_add_property(node, 'color', 'green');
  t.equal(node_with_props.node_types.Node.properties.color, 'green', 'assert properties color is green');
});


test('assert building a node with 2 properties', function(t) {
  t.plan(2)
    
  const node = tosca.build_node();  
  const node_with_props  = tosca.node_add_property(node, 'color', 'green');
  const node_with_2props = tosca.node_add_property(node_with_props, 'size', 'large');

  t.equal(node_with_2props.node_types.Node.properties.color, 'green', 'assert props has color');
  t.equal(node_with_2props.node_types.Node.properties.size, 'large', 'assert props has large');  
});
