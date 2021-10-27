const input = document.getElementById('texto-tarefa');
const btnCreate = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnEraseAll = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');
const btnStorage = document.getElementById('salvar-tarefas');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnRemove = document.getElementById('remover-selecionado');
function createTask() {
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  list.appendChild(tarefa);
  input.value = '';
}
function backColor(e) {
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i].className.includes('background')) {
      list.children[i].classList.remove('background');
    }
  }
  if (e.target.className === 'completed') {
    e.target.className += ' background';
  } else if (e.target.tagName === 'LI') {
    e.target.className = 'background';
  }
}
function scratched(e) {
  if (e.target.className.includes('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.className = 'completed';
  }
}
function eraseAll() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
function clearCompleted() {
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i].className.includes('completed')) {
      list.removeChild(list.children[i]);
      i -= 1;
    }
  }
}
function storageTasks() {
  const array = JSON.parse(localStorage.getItem('tarefas'));
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i].className === 'completed') {
      array.push(list.children[i].innerText += ' CoMpLeTeD');
    } else if (!array.includes(list.children[i].innerText)) {
      array.push(list.children[i].innerText);
    }
  }
  localStorage.setItem('tarefas', JSON.stringify(array));
}
function tasksTexts() {
  const tasksArray = JSON.parse(localStorage.getItem('tarefas'));
  for (let i = 0; i < tasksArray.length; i += 1) {
    const task = document.createElement('li');
    if (tasksArray[i].includes(' CoMpLeTeD')) {
      task.innerText = tasksArray[i].replace(' CoMpLeTeD', '');
      task.className = 'completed';
    } else {
      task.innerText = tasksArray[i];
    }
    list.appendChild(task);
  }
}
window.onload = function tasksOnload() {
  if (localStorage.getItem('tarefas') === null) {
    localStorage.setItem('tarefas', JSON.stringify([]));
  } else {
    tasksTexts();
  }
};
function moveUp() {
  for (let i = 1; i < list.childElementCount; i += 1) {
    if (list.children[i].className === 'background') {
      const element = list.children[i];
      list.removeChild(list.children[i]);
      list.insertBefore(element, list.children[i - 1]);
      /** Source:https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/ */
    }
  }
}
function moveDown() {
  for (let i = list.childElementCount - 1; i >= 0; i -= 1) {
    if (list.children[i].className === 'background') {
      const element = list.children[i];
      list.removeChild(list.children[i]);
      list.insertBefore(element, list.children[i + 1]);
    }
  }
}
function remove() {
  for (let i = 0; list.childElementCount; i += 1) {
    if (list.children[i].className === 'background') {
      list.removeChild(list.children[i]);
      break;
    }
  }
}
btnCreate.addEventListener('click', createTask);
list.addEventListener('click', backColor);
list.addEventListener('dblclick', scratched);
btnEraseAll.addEventListener('click', eraseAll);
btnClearCompleted.addEventListener('click', clearCompleted);
btnStorage.addEventListener('click', storageTasks);
btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);
btnRemove.addEventListener('click', remove);
