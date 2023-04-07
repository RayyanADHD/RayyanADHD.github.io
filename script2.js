const redBtn = document.getElementById('red-btn');
const pinkBtn = document.getElementById('pink-btn');
const yellowBtn = document.getElementById('yellow-btn');

redBtn.addEventListener('click', () => {
  document.body.classList.remove('pink', 'yellow');
  document.body.classList.add('red');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'blue';
    elem.style.fontFamily = 'Monaco';
  });
  
});

pinkBtn.addEventListener('click', () => {
  document.body.classList.remove('red', 'yellow');
  document.body.classList.add('pink');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'blue';
    elem.style.fontFamily = 'Cursive';
  });
});

yellowBtn.addEventListener('click', () => {
  document.body.classList.remove('pink', 'red');
  document.body.classList.add('yellow');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'black';
    elem.style.fontFamily = 'Arial,san-serif';
  });
  
});