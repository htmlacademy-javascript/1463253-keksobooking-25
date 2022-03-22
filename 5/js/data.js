import {getRandomInclusiveInt, getRandomInclusiveNumber, getRandomArrayElements, getRandomArrayElement, getRandomBoolean, leadingZero} from "./util.js";

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

export {createOffer};

