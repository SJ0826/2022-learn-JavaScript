// 배열의 요소들을 텍스트요소만 남기기
const items = [ 
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'bye'
  }
];

const texts = items.map(item => item.text);
console.log(texts);