const motherFactory = require("./factory");

function main() {
  const aunt = motherFactory.createNode("Aunt");
  const father = motherFactory.createNode("Father");
  const son = motherFactory.createNode("Son", [father, aunt]);
  const friend = motherFactory.createNode("Friend");

  son.logConnections();
  console.log();
  motherFactory.mainNode.logConnections();
}

main();
