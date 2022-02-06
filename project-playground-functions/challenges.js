// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  let biggest = arr[0];
  let count = 0;
  for (let i of arr) {
    if (i > biggest) {
      biggest = i;
    }
  }
  for (let j of arr) {
    if (j === biggest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  if (Math.abs(distancia1) < Math.abs(distancia2)) {
    return 'cat1';
  } if (Math.abs(distancia2) < Math.abs(distancia1)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let newArr = [];
  for (let i of arr) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push('fizzBuzz');
    } else if (i % 3 === 0) {
      newArr.push('fizz');
    } else if (i % 5 === 0) {
      newArr.push('buzz');
    } else {
      newArr.push('bug!');
    }
  }
  return newArr;
}

// Desafio 9
function encode(str) {
  let obj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < str.length; i += 1) {
    for (let key in obj) {
      if (str[i] === key) {
        str = str.replace(str[i], obj[key]);
      }
    }
  }
  return str;
}

function decode(str) {
  let obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < str.length; i += 1) {
    for (let key in obj) {
      if (str[i] === key) {
        str = str.replace(str[i], obj[key]);
      }
    }
  }
  return str;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
