'use strict'

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Целые числа

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Числа с плавающей точкой

const getRandom = (min, max, n) => {
  return +((Math.random() * (max - min + 1)) + min).toFixed(n); //Максимум и минимум включаются
}
