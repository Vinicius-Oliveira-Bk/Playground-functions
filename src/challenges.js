// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(myString) {
  // seu código aqui
  let splits = myString.split(' ');
  return splits;
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  return nomes[nomes.length - 1].concat(', ', nomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPontos = (wins * 3) + ties;
  return totalPontos;
}

// Desafio 6
function highestCount(higuestNumber) {
  // seu código aqui
  let greater = Math.max.apply(null, higuestNumber);
  let counts = 0;

  for (let index = 0; index < higuestNumber.length; index += 1) {
    if (higuestNumber[index] === greater) {
      counts += 1;
    }
  }

  return counts;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let warning = '';
  if ((cat2 - mouse) < (cat1 - mouse)) {
    warning = 'cat2';
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    warning = 'cat1'
  } else if (cat1 === cat2) {
    warning = 'os gatos trombam e o rato foge';
  }
  return warning;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
  techList,
};
