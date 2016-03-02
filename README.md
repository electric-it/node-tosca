# node-tosca

This library allows you to create a Tosca template for an instance. 

```
node_types:
  Node:
    type: tosca.nodes.Compute
    properties:
    attributes:
      size: md
    requirements:
      logger: "base"
    capabilities:
      scale: "1x"
    interfaces:
      production: "142.13.5.391
    artifacts:
      size: "md" 
    metadatas:
      last_audit: "2016-04-01"       
```                                                            


Run tests with:

```
npm test
```

