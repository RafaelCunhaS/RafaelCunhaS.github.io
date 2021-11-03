const input = document.getElementById('carta-texto');
const btnCreate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const counter = document.getElementById('carta-contador');

// function count(array) {
//   counter.innerText = array.length;
// }
function randomClasses(span) {
  const group1 = ['newspaper', 'magazine1', 'magazine2'];
  const group2 = ['medium', 'big', 'reallybig'];
  const group3 = ['rotateleft', 'rotateright'];
  const group4 = ['skewleft', 'skewright'];
  const groups = [group1, group2, group3, group4];
  for (let i = 0; i < (Math.floor(Math.random() * 3) + 2); i += 1) {
    span.classList.add(groups[i][Math.floor(Math.random() * groups[i].length)]);
  }
}

function letterContent() {
  if (letter.firstElementChild) {
    letter.removeChild(letter.firstElementChild);
  } if (input.value) {
    const array = input.value.split(' ');
    for (let i = 0; i < array.length; i += 1) {
      const letterText = document.createElement('span');
      randomClasses(letterText);
      letterText.innerText = array[i];
      letter.appendChild(letterText);
    }
    // count(array);
  }
}

btnCreate.addEventListener('click', () => {
  if (!input.value || !input.value.trim()) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else if (letter.innerText) {
    letter.innerText = '';
  } letterContent();
});

letter.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    while (e.target.classList.length > 0) {
      const removeClass = e.target.classList.item(0);
      e.target.classList.remove(removeClass);
    } randomClasses(e.target);
  }
});
