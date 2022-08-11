const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
  const current = parseInt(number.innerText, 10); //parseInt : 문자열을 숫자로 변환.
  number.innerText = current + 1;
}
decrease.onclick = () => {
  const current = parseInt(number.innerText, 10); //parseInt : 문자열을 숫자로 변환.
  number.innerText = current - 1;
}