// Promise all: 여러개의 promise를 동시에 처리한다.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
}

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
}

const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
}

async function process() {
  const [dog,  rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}

process();