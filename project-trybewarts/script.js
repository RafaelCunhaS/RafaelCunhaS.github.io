function login() {
  const email = document.getElementById('email-input');
  const password = document.getElementById('password-input');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

document.getElementById('btn-login').addEventListener('click', login);

const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
function checkBtn() {
  if (!checkbox.checked) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
checkBtn();
checkbox.addEventListener('click', checkBtn);

// Requisito 20 - Requisito realizado através da consulta na seguinte documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keyup_event

const textArea = document.getElementById('textarea');
const countOutput = document.getElementById('counter');

function countCaracther() {
  const contador = textArea.value.length;
  countOutput.innerText = 500 - contador;
}

textArea.addEventListener('keyup', countCaracther);

/* Requisito 21 */

const nome = document.getElementById('name');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailText = document.getElementById('email');
const email = document.getElementById('input-email');
const houseText = document.getElementById('house-text');
const house = document.getElementById('house');
const family = document.getElementById('family');
const familyRadio = document.getElementById('family-radio');
const subjects = document.getElementById('subjects');
const sub = document.querySelectorAll('.subject');
const rate = document.getElementById('rate-text');
const rateRadio = document.getElementById('rate-radio');
const obs = document.getElementById('obs');

function rateCheck() {
  for (let i = 0; i < rateRadio.children.length; i += 1) {
    if (rateRadio.children[i].firstChild.checked) {
      rate.innerText += ` ${rateRadio.children[i].firstChild.value}`;
    }
  }
}

function showInfos() {
  nome.innerText += ` ${firstName.value} ${lastName.value}`;
  emailText.innerText += ` ${email.value}`;
  houseText.innerText += ` ${house.value}`;
  for (let i = 0; i < sub.length; i += 1) {
    if (sub[i].checked) {
      subjects.innerText += ` ${sub[i].value},`;
    }
  }
  const str = subjects.innerText.replace(/,*$/, ''); /* Source: https://stackoverflow.com/questions/17720264/remove-last-comma-from-a-string */
  subjects.innerText = str;
  rateCheck();
  obs.innerText += ` ${textArea.value}`;
}

const infos = document.getElementById('info');
const form = document.getElementById('evaluation-form');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  while (form.firstChild.id !== 'info') {
    form.removeChild(form.firstChild);
  }
  for (let i = 0; i < familyRadio.children.length; i += 1) {
    if (familyRadio.children[i].firstChild.checked) {
      family.innerText += ` ${familyRadio.children[i].firstChild.value}`;
    }
  }
  showInfos();
  infos.style.display = 'flex';
});
