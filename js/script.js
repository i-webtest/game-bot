'use strict';

// let gameNum = 10;

let getRandomNumber = function () {
  return Math.ceil(Math.random() * 100);
};
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const startGame = function () {
  let randomNumber = getRandomNumber();
  const game = function () {
    let num = prompt("Угадай число от 1 до 100");

    if (num === null) {
      alert("Игра окончена");
      return;
    }

    if (isNumber(num)) {
      const numUser = +num;

      if (numUser > randomNumber) {
        alert("Загаданное число меньше");
        game();
      } else if (numUser < randomNumber) {
          alert("Загаданное число больше");
          game();
      } else {
        if (confirm("Поздравляю, Вы угадали!!!")) {
          startGame();
        } else {
          alert("Игра окончена");
          return;
        }
      }
    } else {
      alert("Введи число!");
      game();
    }

  };

  game();
  
};

startGame();









// const peelPotato = function (potatoIndex) {
//   if (potatoIndex > 0) {
//     console.log("Картошка №" + potatoIndex + " почищена");
//     potatoIndex--
//     peelPotato(potatoIndex);
//   }

// };

// peelPotato(potato);
