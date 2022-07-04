/*
  Dependency injection
*/

const { ServiceOne, ServiceTwo } = require("./services");
const HashingClient = require("./client");

function main() {
  const valueToHash = "testing-hashing";

  const serviceOne = new ServiceOne();
  const clientOne = new HashingClient(serviceOne);

  const serviceTwo = new ServiceTwo();
  const clientTwo = new HashingClient(serviceTwo);

  const clientThree = new HashingClient();

  console.log(clientOne.hash(valueToHash));
  console.log(clientTwo.hash(valueToHash));
  console.log(clientThree.hash(valueToHash));
}

main();
