# Dependency Injection

A strategy where an object has it's dependencies injected into it. It has an schema of client-service.

In simpler terms, dependency injection is passing something that the client needs in order to work, instead of building it itself, or getting is from global scope.



## Why
  * Separation of concerns - Separates the construction and use a service
  * Reusavility - Services created outside the client can be used anywhare
  * Testing

## Why not
  * Can be more work
  * Can be just as simple to construct the service in the client
  * Might move the logic to build services somewhere that's harder to manage

## Examples:
  * Dependency Injection in NestJS