// bad
const lis = document.querySelectorAll('li');
lis.forEach(li => {
  li.addEventListener('click', () =>{
    li.classList.add('selected');
  });
}); 

// good

const ul = document.querySelector('ul');
ul.addEventListener('click', (event) => {
  if(event.target.tagName == 'LI') {
    event.target.classList.add('selected');
  }
})