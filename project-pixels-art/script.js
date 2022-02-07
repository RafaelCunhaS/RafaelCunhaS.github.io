const selectColor = document.getElementById('color-palette');
function makeSquare(color) {
  const square = document.createElement('div');
  square.style.backgroundColor = color;
  square.className = 'color';
  selectColor.appendChild(square);
}
function randomColor() {
  const code = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const arr = [];
  for (let i = 0; i < 6; i += 1) {
    arr.push(code[Math.floor(Math.random() * (code.length))]);
  }
  const str = arr.join('');
  return `#${str}`;
}

makeSquare('black');
makeSquare(randomColor());
makeSquare(randomColor());
makeSquare(randomColor());

const board = document.getElementById('pixel-board');
function makePixel(n) {
  for (let i = 0; i < n; i += 1) {
    const rows = document.createElement('div');
    rows.className = 'row';
    board.appendChild(rows);
    for (let j = 0; j < n; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      rows.appendChild(pixel);
    }
  }
}

const black = document.querySelector('.color');
black.className += ' selected';

const loop = document.getElementsByClassName('color');

function select(e) {
  for (let i = 0; i < loop.length; i += 1) {
    if (loop[i].className.includes('selected')) {
      loop[i].className = 'color';
    }
  }
  if (e.target.id !== 'color-palette') {
    e.target.className += ' selected';
  }
}
selectColor.addEventListener('click', select);

function pixelColor(e) {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
board.addEventListener('click', pixelColor);

const btnClear = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');
function clearPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
btnClear.addEventListener('click', clearPixel);

const btnCreate = document.getElementById('generate-board');
const input = document.getElementById('board-size');
function createBoard() {
  if (input.value === '') {
    alert('Board inválido!');
    return false;
  } if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  makePixel(input.value);
}
makePixel(5);
btnCreate.addEventListener('click', createBoard);
