const inputElement = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const textValue = document.getElementById('text-input');
const text = document.getElementById('meme-text');

inputElement.addEventListener('change', () => {
  image.src = URL.createObjectURL(inputElement.files[0]);
});

textValue.addEventListener('input', () => {
  text.innerText = textValue.value;
});

const fileSelect = document.getElementById('btnFile');
fileSelect.addEventListener('click', () => {
  if (inputElement) {
    inputElement.click();
  }
});

const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const container = document.getElementById('meme-image-container');
btnFire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});
btnWater.addEventListener('click', () => {
  container.style.border = '5px double blue';
});
btnEarth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});

const memes = document.getElementById('memes');

memes.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    image.src = e.target.src;
  }
});
