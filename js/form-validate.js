import {capacityRestrictions} from './data.js';

const form = document.querySelector('.ad-form');
const pristineConfig = {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
};

const pristine = new Pristine(form, pristineConfig);

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

const capacitySelectElement = document.querySelector('#capacity');
const roomsSelectElement = document.querySelector('#room_number');
const validateCapacity = (value) => {
  const roomsValue = roomsSelectElement.value;
  const roomsCapacity = capacityRestrictions[roomsValue];
  return roomsCapacity.includes(value);
};

roomsSelectElement.addEventListener('change', () => {
  pristine.validate();
});

pristine.addValidator(capacitySelectElement, validateCapacity, 'Количество гостей не соответствует количеству комнат');



const typeHousing = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const type = document.querySelector('#type');
const minPrice = document.querySelector('#price');

const setPlaceholder = () => {
  if (type.value === 'bungalow') {
    minPrice.removeAttribute('placeholder');
    minPrice.setAttribute('placeholder', `${typeHousing.bungalow}`);
  }

  if (type.value === 'flat') {
    minPrice.removeAttribute('placeholder');
    minPrice.setAttribute('placeholder', `${typeHousing.flat}`);
  }

  if (type.value === 'hotel') {
    minPrice.removeAttribute('placeholder');
    minPrice.setAttribute('placeholder', `${typeHousing.hotel}`);
  }

  if (type.value === 'house') {
    minPrice.removeAttribute('placeholder');
    minPrice.setAttribute('placeholder', `${typeHousing.house}`);
  }

  if (type.value === 'palace') {
    minPrice.removeAttribute('placeholder');
    minPrice.setAttribute('placeholder', `${typeHousing.palace}`);
  }
};

type.addEventListener('change', setPlaceholder);
