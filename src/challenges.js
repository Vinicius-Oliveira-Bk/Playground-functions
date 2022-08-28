/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
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
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  // seu código aqui
  let arrayOfStrings = [];

  for (let index of arrayOfNumbers) {
    if (index % 3 === 0 && index % 5 === 0) {
      arrayOfStrings.push('fizzBuzz');
    } else if (index % 3 === 0) {
      arrayOfStrings.push('fizz');
    } else if (index % 5 === 0) {
      arrayOfStrings.push('buzz');
    } else {
      arrayOfStrings.push('bug!');
    }
  }
  return arrayOfStrings;
}

// Desafio 9
function encode(stringReceived) {
  // seu código aqui
  let string1 = stringReceived.replace(/a/gi, '1');
  let string2 = string1.replace(/e/gi, '2');
  let string3 = string2.replace(/i/gi, '3');
  let string4 = string3.replace(/o/gi, '4');
  let string5 = string4.replace(/u/gi, '5');

  return string5;
}

function decode(string5) {
  // seu código aqui
  let stringDecoder1 = string5.replace(/1/gi, 'a');
  let stringDecoder2 = stringDecoder1.replace(/2/gi, 'e');
  let stringDecoder3 = stringDecoder2.replace(/3/gi, 'i');
  let stringDecoder4 = stringDecoder3.replace(/4/gi, 'o');
  let stringDecoder5 = stringDecoder4.replace(/5/gi, 'u');

  return stringDecoder5;
}

// Desafio 10
function techList(techNames, name) {
  // seu código aqui
  let objectOfTechs = {};

  for (let index = 0; index < techNames.length; index += 1) {

  }
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
