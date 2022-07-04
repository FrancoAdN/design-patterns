class ServiceOne {
  name = "ServiceOne";

  hash(value) {
    return value
      .split("")
      .map((ch) => String.fromCharCode(ch.charCodeAt(0) + 3))
      .join("");
  }
}

class ServiceTwo {
  name = "ServiceOne";

  hash(value) {
    return value
      .split("")
      .reverse()
      .map((ch) => String.fromCharCode(ch.charCodeAt(0) - 3))
      .join("");
  }
}

module.exports = {
  ServiceOne,
  ServiceTwo,
};
