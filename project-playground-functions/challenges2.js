// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  arr.sort();
  let list = [];
  for (let i of arr) {
    let obj = {};
    if (obj[i] === undefined) {
      obj.tech = i;
      obj.name = name;
    }
    list.push(obj);
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of arr) {
    if (i < 0 || i > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let frequency = 0;
    for (let j of arr) {
      if (i === j) {
        frequency += 1;
      }
      if (frequency >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } arr.splice(0, 0, '('); arr.splice(3, 0, ') '); arr.splice(9, 0, '-');
  return arr.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sum1 = lineA < lineB + lineC;
  let sum2 = lineB < lineA + lineC;
  let sum3 = lineC < lineB + lineA;
  let diff1 = lineA > Math.abs(lineB - lineC);
  let diff2 = lineB > Math.abs(lineA - lineC);
  let diff3 = lineC > Math.abs(lineB - lineA);
  if ((sum1 && diff1) || (sum2 && diff2) || (sum3 && diff3)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
  let x = /\d+/g;
  /** Source: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript */
  let n = str.match(x);
  let sum = 0;
  for (let i of n) {
    sum += parseInt(i, 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
