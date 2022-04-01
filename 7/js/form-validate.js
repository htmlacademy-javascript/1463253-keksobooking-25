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
