class Node {
  constructor(connections, info) {
    this.connections = connections;
    this.info = info;
  }

  setConnection(connection) {
    this.connections.push(connection);
  }

  logConnections() {
    this.connections.forEach((node) => console.log(node.info));
  }
}

class NodeFactory {
  nodesCreatd = 0;
  constructor() {
    this.mainNode = new Node([], "Mother");
  }

  createNode(info, connections = []) {
    // to the provided info, we append the amount of nodes that were previously created as a weight
    // all node are connected to the main node
    connections = [...connections, this.mainNode];
    this.nodesCreatd++;
    const node = new Node(connections, { info, weight: this.nodesCreatd });
    this.mainNode.setConnection(node);
    return node;
  }
}

module.exports = new NodeFactory();
