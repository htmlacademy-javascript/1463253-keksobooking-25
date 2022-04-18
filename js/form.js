import { initFormValidation } from './form-validate.js';
import { START_PRICE } from './data.js';
import { sendAdvertData } from './api.js';

const form = document.querySelector('.ad-form');
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

// Создание слайдера для выбора цены жилья
const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
valueElement.value = START_PRICE;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1000,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const formValidator = initFormValidation(form);

const showFormSendMessage = (messageTemplate) => {
  document.body.append(messageTemplate);
};

const onFormSendSuccess = () => {
  showFormSendMessage(successTemplate);
};
const onFormSendFailed = () => {
  showFormSendMessage(errorTemplate);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = formValidator.validate();
  if (!isValid) {
    return;
  }

  sendAdvertData(new FormData(form), onFormSendSuccess, onFormSendFailed);
});

export{pageActive};
