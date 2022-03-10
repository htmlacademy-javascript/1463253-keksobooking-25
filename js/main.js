/**
 * Получаем случайное целое число из диапазона
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @returns {number}
 */
const getRandomInclusiveInt = (min, max) => {
  if ((typeof min !== 'number' || typeof max !== 'number') || (min < 0 && max < 0)) {
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


const createPromo = () => {
  const typeHotel = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const timeToIn = ['12:00', '13:00', '14:00'];
  const timeToOut = ['12:00', '13:00', '14:00'];
  const featuresInHotel = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const locationLat = getRandomInclusiveNumber(35.65000, 35.70000, 5);
  const locationLng = getRandomInclusiveNumber(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: "img/avatars/user{{xx}}.png",
    },

    offer: {
      title: 'Отель',
      address: [locationLat, locationLng],
      price: getRandomInclusiveInt(0, 10),
      type: typeHotel[getRandomInclusiveInt(0, typeHotel.length - 1)],
      rooms: getRandomInclusiveInt(0, 10),
      guests: getRandomInclusiveInt(0, 10),
      checkin: timeToIn[getRandomInclusiveInt(0, timeToIn.length - 1)],
      checkout: timeToOut[getRandomInclusiveInt(0, timeToOut.length - 1)],
      features: featuresInHotel[getRandomInclusiveInt(0, featuresInHotel.length - 1)],
      description: 'Пока ещё не придумал описание',
      photos: '',
    },

    location: {
      lat: locationLat,
      lng: locationLng,
    },
  }
}

console.log(createPromo());

const createPromoList = Array.from({length: 10}, createPromo);

console.log(createPromoList);
