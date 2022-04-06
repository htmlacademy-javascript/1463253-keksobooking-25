import {capacityRestrictions} from './data.js';
import {typeHousing} from './data.js';

const form = document.querySelector('.ad-form');
const capacitySelectElement = document.querySelector('#capacity');
const roomsSelectElement = document.querySelector('#room_number');
const type = document.querySelector('#type');
const minPriceElement = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const formFieldsets = document.querySelectorAll('.ad-form__element');
const formHeaderFieldset = document.querySelector('.ad-form-header');
const mapFiltersContainer = document.querySelector('.map__filters');
// Неактивное состояние страницы

function pageInactive () {
  mapFiltersContainer.classList.add('ad-form--disabled');
  form.classList.add('ad-form--disabled');
  formHeaderFieldset.setAttribute('disabled', 'disabled');
  for (let i = 0; i <= formFieldsets.length; i++) {
    formFieldsets[i].setAttribute('disabled', 'disabled');
  }
}

pageInactive();

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

const validateCapacity = (value) => {
  const roomsValue = roomsSelectElement.value;
  const roomsCapacity = capacityRestrictions[roomsValue];
  return roomsCapacity.includes(value);
};

roomsSelectElement.addEventListener('change', () => {
  pristine.validate();
});

const validateMinPrice = (value) => Number(value) >= Number(minPriceElement.min);

pristine.addValidator(capacitySelectElement, validateCapacity, 'Количество гостей не соответствует количеству комнат');
pristine.addValidator(minPriceElement, validateMinPrice, 'Ошибка');

const setPlaceholder = () => {
  minPriceElement.setAttribute('placeholder', typeHousing[type.value]);
  minPriceElement.setAttribute('min', typeHousing[type.value]);
  minPriceElement.dispatchEvent(new Event('input'));
};

type.addEventListener('change', setPlaceholder);

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

