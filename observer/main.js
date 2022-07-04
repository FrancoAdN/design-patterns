const Observable = require("./observable");

function main() {
  const subject = new Observable();

  const subOne = (data) => {
    //logs the new name
    console.log(data, "first sub");
  };

  const setNewName = (data) => {
    // function calls an API to update the new name
    console.log(`New name was set as: ${data}`);
  };

  const sendMessage = (data) => {
    // email service sends email
    console.log("email sent", data);
  };
  const sendEmail = (data) => {
    const newData = {
      name: data,
      date: new Date(),
      body: `${data} has sent you a new message`,
    };
    sendMessage(newData);
  };

  subject.subscribe(subOne);
  subject.subscribe(setNewName);
  subject.subscribe(sendEmail);

  subject.broadcast("Emil");

  subject.unsubscribe(sendEmail);
  subject.broadcast("Tracy");
}

main();
