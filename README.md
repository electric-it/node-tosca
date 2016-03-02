# node-tosca

This library allows you to create a Tosca template for an instance. 

node-tosca has a pretty print method to print a tosca object when you are in the repl.

# Usage

```
var tosca = require("./tosca.js")

var a = tosca.node.build()

a = tosca.node.add_property(a, "color", "red")
a = tosca.node.add_attribute(a, "size", "md")
a = tosca.node.add_requirement(a, "logger", "base")
a = tosca.node.add_capability(a, "scale", "1x")
a = tosca.node.add_interface(a, "production", "142.13.5.391")
a = tosca.node.add_artifact(a, "size", "md")
a = tosca.node.add_metadata(a, "last_audit", "2016-04-01")

z = tosca.instance.build()
z = tosca.instance.add_property(z,'color', 'red')
z = tosca.instance.add_state(z, 'starting')

> tosca.pp(a);
node_types:
  Node:
    type: tosca.nodes.Compute
    properties:
      color: red
    attributes:
      size: md
    requirements:
      logger: base
    capabilities:
      scale: 1x
    interfaces:
      production: 142.13.5.391
    artifacts:
      size: md
    metadatas:
      last_audit: 2016-04-01


> tosca.pp(z)

node_instance:
  properties:
    color: red
  state:      starting

```


## Development

Run tests with:

```
npm test
```

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
