//특정조건을 만족하는 원소들을 찾아서 그 원소들로 새로운 배열을 만든다.

// findindex

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id:3,
    text:'객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text:'배열 내장함수 배우기',
    done: false
  }
]

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);