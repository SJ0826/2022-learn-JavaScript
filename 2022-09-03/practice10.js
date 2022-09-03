let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log("message는 읽음 상태인가요?:" + readMessages.has(messages[0]));

messages.shift();