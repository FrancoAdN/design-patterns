class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(func) {
    this.subscribers.push(func);
  }

  unsubscribe(func) {
    this.subscribers = this.subscribers.filter((sub) => sub !== func);
  }

  broadcast(data) {
    this.subscribers.forEach((fn) => {
      fn(data);
    });
  }
}

module.exports = Observable;
