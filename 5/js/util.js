const isNumber = (value) => typeof value === 'number';

/**
 * Получаем случайное целое число из диапазона
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @returns {number}
 */
const getRandomInclusiveInt = (min, max) => {
  if (!isNumber(min) || !isNumber(max) || Math.max(min, max) < 0) {
    return null;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (min === max) {
    return min;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

/**
 * Получаем случайное целое число из диапазона
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @param {number} precision - количество знаков после запятой
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @returns {number}
 */
const getRandomInclusiveNumber = (min, max, precision) => {
  if ((typeof min !== 'number' || typeof max !== 'number') || (min < 0 && max < 0)) {
    return null;
  }

  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (min === max) {
    return min;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return +((Math.random() * (max - min + 1)) + min).toFixed(precision); //Максимум и минимум включаются
};

getRandomInclusiveInt();
getRandomInclusiveNumber();

/**
 * Функция возвращет лидирующий ноль
 * @param {number} number
 * @returns {string}
 */
const leadingZero = (number) => String(number).padStart(2, 0);

/**
 * Функция возвращает случайное значение из данных массива
 *@param {number}
 *@returns {number}
 *  */
const getRandomBoolean = () => Math.random() >= 0.5;

const getRandomArrayElements = (array) => array.filter(() => getRandomBoolean());

const getRandomArrayElement = (array) => array[getRandomInclusiveInt(0, array.length - 1)];

export {getRandomInclusiveInt, getRandomInclusiveNumber, getRandomArrayElements, getRandomArrayElement, leadingZero};
