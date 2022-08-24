let message = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(message[0]);
readMessages.add(message[1]);

readMessages.add(message[0]);

console.log("message 0은 읽음 상태인가요?: " + readMessages.has(message[0]));

message.shift();

