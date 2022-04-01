import {
  ADDRESS_MIN_LAT,
  ADDRESS_MAX_LAT,
  ADDRESS_MIN_LNG,
  ADDRESS_MAX_LNG,
  COORDINATE_PRECISION,
  OFFER_MIN_PRICE,
  OFFER_MAX_PRICE,
  HOTEL_MIN_ROOMS,
  HOTEL_MAX_ROOMS,
  OFFER_MIN_GUESTS,
  OFFER_MAX_GUESTS,
  HOTEL_TYPES,
  OFFER_TO_IN_TIMES,
  OFFER_TO_OUT_TIMES,
  HOTEL_FEATURES,
  HOTEL_PHOTOS,
} from './data.js';

import {
  getRandomInclusiveInt,
  getRandomInclusiveNumber,
  getRandomArrayElements,
  getRandomArrayElement,
  leadingZero
} from './util.js';
/**
 * Функция по созданию шаблона объявления на основе имеющихся данных
 * @param {*} _
 * @param {*} index
 * @returns {Object}
 */
const createAdvert = (_, index) => {
  const locationLat = getRandomInclusiveNumber(ADDRESS_MIN_LAT, ADDRESS_MAX_LAT, COORDINATE_PRECISION);
  const locationLng = getRandomInclusiveNumber(ADDRESS_MIN_LNG, ADDRESS_MAX_LNG, COORDINATE_PRECISION);

  return {
    author: {
      avatar: `img/avatars/user${leadingZero(index + 1)}.png`,
    },

    offer: {
      title: 'Отель',
      address: `${locationLat}, ${locationLng}`,
      price: getRandomInclusiveInt(OFFER_MIN_PRICE, OFFER_MAX_PRICE),
      type: getRandomArrayElement(HOTEL_TYPES),
      rooms: getRandomInclusiveInt(HOTEL_MIN_ROOMS, HOTEL_MAX_ROOMS),
      guests: getRandomInclusiveInt(OFFER_MIN_GUESTS, OFFER_MAX_GUESTS),
      checkin: getRandomArrayElement(OFFER_TO_IN_TIMES),
      checkout: getRandomArrayElement(OFFER_TO_OUT_TIMES),
      features: getRandomArrayElements(HOTEL_FEATURES),
      description: 'Здесь будет описание отеля',
      photos: getRandomArrayElements(HOTEL_PHOTOS),
    },

    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

export {createAdvert};
