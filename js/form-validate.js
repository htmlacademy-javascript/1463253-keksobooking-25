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
const mapFiltersContainer = document.querySelector('.map__filters');
const mapFiltersSelects = document.querySelectorAll('.map__filters-container select');
const housingFeatures = document.querySelector('#housing-features');


/**
 * Функция переводит страницу в неактивное состояние
 */
const pageInactive = () => {
  form.classList.add('ad-form--disabled');
  formFieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  mapFiltersContainer.classList.add('ad-form--disabled');
  mapFiltersSelects.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  housingFeatures.setAttribute('disabled', 'disabled');
};

pageInactive();

/**
 * Функция переводит страницу в активное состояние
 */
const pageActive = () => {
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach((element) => {
    element.removeAttribute('disabled');
  });

  mapFiltersContainer.classList.remove('ad-form--disabled');
  mapFiltersSelects.forEach((element) => {
    element.removeAttribute('disabled');
  });

  housingFeatures.removeAttribute('disabled');
};

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

export {pageActive};
