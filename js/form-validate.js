import {capacityRestrictions} from './data.js';
import {typeHousing} from './data.js';

const capacitySelectElement = document.querySelector('#capacity');
const roomsSelectElement = document.querySelector('#room_number');
const type = document.querySelector('#type');
const minPriceElement = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const pristineConfig = {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
};

const validateCapacity = (value) => {
  const roomsValue = roomsSelectElement.value;
  const roomsCapacity = capacityRestrictions[roomsValue];
  return roomsCapacity.includes(value);
};

const validateMinPrice = (value) => Number(value) >= Number(minPriceElement.min);

const initFormValidation = (form) => {
  const pristine = new Pristine(form, pristineConfig);

  const setPlaceholder = () => {
    minPriceElement.setAttribute('placeholder', typeHousing[type.value]);
    minPriceElement.setAttribute('min', typeHousing[type.value]);
    pristine.validate();
  };

  roomsSelectElement.addEventListener('change', () => {
    pristine.validate();
  });

  pristine.addValidator(capacitySelectElement, validateCapacity, 'Количество гостей не соответствует количеству комнат');
  pristine.addValidator(minPriceElement, validateMinPrice, 'Ошибка');

  type.addEventListener('change', setPlaceholder);

  timeIn.addEventListener('change', () => {
    timeOut.value = timeIn.value;
  });

  timeOut.addEventListener('change', () => {
    timeIn.value = timeOut.value;
  });

  return pristine;
};

export {initFormValidation};
