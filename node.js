function node() {
    return "hello";
}

function instance(node, type, value) {
    node.push({type: value});
}

module.exports = node;
