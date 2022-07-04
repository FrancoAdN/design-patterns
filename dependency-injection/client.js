class HashingClient {
  service = null;

  constructor(service) {
    this.service = service;
  }

  hash(value) {
    if (this.service) {
      value = `${value}/##t${this.service.name}`;
      return this.service.hash(value);
    }
    return "value could not be hashed";
  }
}

module.exports = HashingClient;
