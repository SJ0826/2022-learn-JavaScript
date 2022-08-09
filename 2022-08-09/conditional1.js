// 조건문 더 스마트하게 사용하기

function isAnimal(text) {
  const animals =['고양이', '개', '거북이', '너구리'];
  return animals.includes(text); //text를 포함할 경우 true
}
// const isAnimal = text => ['고양이', '개', '거북이', '너구리'].include(text);

console.log(isAnimal('개'));
console.log(isAnimal('고양이'));