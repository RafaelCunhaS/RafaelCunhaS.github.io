const rgb = document.getElementById('rgb-color');
const colors = document.getElementById('colors');
const answer = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');
const score = document.getElementById('score');
function randomColor() {
  const firstN = Math.floor(Math.random() * 256);
  const secondN = Math.floor(Math.random() * 256);
  const thirdN = Math.floor(Math.random() * 256);
  return `(${firstN}, ${secondN}, ${thirdN})`;
}

function createCircles() {
  for (let i = 0; i < 6; i += 1) {
    const circle = document.createElement('span');
    circle.className = 'circles';
    circle.style.backgroundColor = `rgb${randomColor()}`;
    colors.appendChild(circle);
  }
}
createCircles();

function setAnswer() {
  const rightColor = colors.children[Math.floor(Math.random() * 6)];
  rightColor.id = 'right-color';
  rgb.innerText = rightColor.style.backgroundColor.replace('rgb', '');
}
setAnswer();

colors.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    if (e.target.id === 'right-color') {
      answer.innerText = 'Correct!';
      let toNumber = Number(score.innerText);
      toNumber += 3;
      score.innerText = toNumber;
    } else {
      answer.innerText = 'Wrong! Try Again!';
    }
  }
});

function clearAll() {
  while (colors.firstElementChild) {
    colors.removeChild(colors.firstElementChild);
  }
}

btnReset.addEventListener('click', () => {
  clearAll();
  createCircles();
  setAnswer();
  answer.innerText = 'Choose a color';
});