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
  }
]

const index = todos.findIndex(todo => todo.id === 3)
const index2 = todos.find(todo => todo.id === 3) // find해서 찾은 객체를 통째로 반환