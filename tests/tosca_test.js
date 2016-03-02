var test = require('tape')
var tosca = require('../lib/tosca.js')

test('assert building a node with 1 property', function(t) {
  t.plan(2)
    
  var node = tosca.node.build()
  t.equal(typeof node, 'object', 'assert node is object')

  var node_with_props = tosca.node.add_property(node, 'color', 'green')
  t.equal(node_with_props.node_types.Node.properties.color, 'green', 'assert properties color is green')
})


test('assert building a node with 2 properties', function(t) {
  t.plan(2)
    
  var node = tosca.node.build()  
  var node_with_props  = tosca.node.add_property(node, 'color', 'green')
  var node_with_2props = tosca.node.add_property(node_with_props, 'size', 'large')

  t.equal(node_with_2props.node_types.Node.properties.color, 'green', 'assert props has color')
  t.equal(node_with_2props.node_types.Node.properties.size, 'large', 'assert props has large') 
})

test('assert building node_instance', function(t) {
  t.plan(1)

  var instance = tosca.instance.build()
  t.equal(typeof instance, 'object', 'assert node instance is object')
})

test('assert building node_instance with state', function(t) {
  t.plan(1)

  var instance = tosca.instance.build()
  var instance_with_state = tosca.instance.add_state(instance, 'started')  
  t.equal(instance_with_state.node_instance.state, 'started', 'assert node instance state is set')
})

test('assert building node_instance with properties', function(t) {
  t.plan(1)

  var instance = tosca.instance.build()
  var instance_with_props = tosca.instance.add_property(instance, 'color', 'red')

  t.equal(instance_with_props.node_instance.properties.color, 'red', 'assert node_instance has 1 property')  
})


