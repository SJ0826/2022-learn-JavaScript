const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2; 
/*이벤트가 발생할때마다 left와 top이 변경되어 layout, paint, composite 모두 변경됨. => 안좋은 코드
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log('${event.clientX} ${event.clientY}');

  vertical.style.left = `${x}px`;
  horozontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;

  tag.innerHTML = `${x}px, ${y}px`

})
*/
// translaet만 이용해서 composit 만 발생하게 한다.
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  

  vertical.style.transform = `translateX(${x}px)`;
  horozontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;


  tag.innerHTML = `${x}px, ${y}px`

})