class Order {
  constructor() {
    this.pendingPaymentOrderState = new PendingPaymentState(this);
    this.cancelledOrderState = new CancelledState(this);
    this.preparedOrderState = new BeingPreparedState(this);
    this.shippedOrderState = new ShippedState(this);
    this.setState(this.pendingPaymentOrderState);
  }

  setState(state) {
    this.currentState = state;
    console.log(`State: ${this.getState().constructor.name}`);
  }

  getState() {
    return this.currentState;
  }
}

// usually implements an interface
class BeingPreparedState {
  constructor(order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cacelling the order");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log("Already verified!");
  }

  shipOrder() {
    console.log("Shipping order!");
    this.order.setState(this.order.shippedOrderState);
  }
}

// usually implements an interface
class CancelledState {
  constructor(order) {
    this.order = order;
  }
  cancelOrder() {
    console.log("Order already cancelled");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log("Order cancelled, you cannot verify payment ");
  }

  shipOrder() {
    console.log("Can not ship the order, it was cancelled");
  }
}

// usually implements an interface
class PendingPaymentState {
  constructor(order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cacelling the unpaid order");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log("Payment verified, shipping soon!");
    this.order.setState(this.order.preparedOrderState);
  }

  shipOrder() {
    console.log("Can not ship the order, a payment is needed");
  }
}

// usually implements an interface
class ShippedState {
  constructor(order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cannot cancel, order shipped!");
  }
  verifyPayment() {
    console.log("Cannot verify, order shipped!");
  }
  shipOrder() {
    console.log("Cannot ship, order already been shipped!");
  }
}

function main() {
  const order = new Order();
  order.getState().shipOrder(); // can't ship, payment needed

  order.getState().verifyPayment(); // moved to Beign Prepared
  order.getState().verifyPayment(); //already verified

  order.getState().shipOrder(); // moved to Shipped
  order.getState().shipOrder(); // already Shipped

  order.getState().cancelOrder(); // cannot cancel, order shipped

  const orderTwo = new Order();
  orderTwo.getState().shipOrder(); // can't ship, payment needed

  orderTwo.getState().verifyPayment(); // moved to Beign Prepared
  orderTwo.getState().cancelOrder(); // order cancelled

  orderTwo.getState().shipOrder(); // can't ship order cancelled
  orderTwo.getState().cancelOrder(); // already cancelled
}

main();
