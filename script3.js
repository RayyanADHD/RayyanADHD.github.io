const grayBtn = document.getElementById('gray-btn');
const blackBtn = document.getElementById('black-btn');
const brownBtn = document.getElementById('brown-btn');

grayBtn.addEventListener('click', () => {
  document.body.classList.remove('black', 'brown');
  document.body.classList.add('gray');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'red';
    elem.style.fontFamily = 'Monaco';
  });
  
});

blackBtn.addEventListener('click', () => {
  document.body.classList.remove('gray', 'brown');
  document.body.classList.add('black');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'white';
    elem.style.fontFamily = 'Cursive';
  });
});

brownBtn.addEventListener('click', () => {
  document.body.classList.remove('black', 'gray');
  document.body.classList.add('brown');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'black';
    elem.style.fontFamily = 'Arial,san-serif';
  });
  
});