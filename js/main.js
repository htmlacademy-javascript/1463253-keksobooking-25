const PRICE_MIN = 0;
const PRICE_MAX = 10;
const ROOMS_MIN = 0;
const ROOMS_MAX = 10;
const GUESTS_MIN = 0;
const GUESTS_MAX = 10;
const TYPE_HOTEL = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_TO_IN = ['12:00', '13:00', '14:00'];
const TIME_TO_OUT = ['12:00', '13:00', '14:00'];
const FEATURES_IN_HOTEL = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const isNumber = (value) => {
  return typeof value === 'number';
}

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
const leadingZero = (number) => {
  return String(number).padStart(2, 0);
}

const getRandomBoolean = () => {
  return Math.random() >= 0.5;
}

const getRandomArrayElements = (array) => {
  return array.filter(() => getRandomBoolean());
}

const getRandomArrayElement = (array) => {
  return array[getRandomInclusiveInt(0, array.length - 1)];
}


const createOffer = (_, index) => {
  const locationLat = getRandomInclusiveNumber(35.65000, 35.70000, 5);
  const locationLng = getRandomInclusiveNumber(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: "img/avatars/user" + leadingZero(index + 1) + ".png",
    },

    offer: {
      title: 'Отель',
      address: [locationLat, locationLng],
      price: getRandomInclusiveInt(PRICE_MIN, PRICE_MAX),
      type: getRandomArrayElement(TYPE_HOTEL),
      rooms: getRandomInclusiveInt(ROOMS_MIN, ROOMS_MAX),
      guests: getRandomInclusiveInt(GUESTS_MIN, GUESTS_MAX),
      checkin: getRandomArrayElement(TIME_TO_IN),
      checkout: getRandomArrayElement(TIME_TO_OUT),
      features: getRandomArrayElements(FEATURES_IN_HOTEL),
      description: 'Пока ещё не придумал описание',
      photos: getRandomArrayElements(PHOTOS),
    },

    location: {
      lat: locationLat,
      lng: locationLng,
    },
  }
}

console.log(createOffer());

const createOfferList = Array.from({length: 10}, createOffer);

console.log(createOfferList);
