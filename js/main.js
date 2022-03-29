import {createAdvert} from './create-advert.js';
import {renderAdvert} from './render.js';
import {ADVERTS_COUNT} from './data.js';
const adverts = Array.from({length: ADVERTS_COUNT}, createAdvert);

renderAdvert(adverts[0]);

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
  evt.preventDefault();
  const valid = pristine.validate();
});


// const selectionRoomsContainer = document.querySelector('#room_number');
// const selectionGuestsContainer = document.querySelector('#capacity');

// const onFilterChange = (evt) => {
// };

// selectionRoomsContainer.addEventListener('change', onFilterChange);
