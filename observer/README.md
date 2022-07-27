# Observer Design Pattern

It is an object that mantains a list of dependents and notifies them when state changes, usually calling a broadcast method.
It has an schema of One-to-Many between Subject and Observers.

One common implementation is to use it to notity the UI that a value has changed, React uses this pattern to update just one part of the UI instead of the whole page.

## Examples:
  * Javascript Events
  * RxJS
  * React useState
  * Amazon SNS
  * Amazon SQS
  * Amazon Lambdas are Subscribers
  * Socket.IO