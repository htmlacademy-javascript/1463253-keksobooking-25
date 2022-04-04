import {createAdvert} from './create-advert.js';
import {renderAdvert} from './render.js';
import {ADVERTS_COUNT} from './data.js';
import './form-validate.js';
const adverts = Array.from({length: ADVERTS_COUNT}, createAdvert);

renderAdvert(adverts[0]);

// const typeHousing = {
//   'bungalow': 0,
//   'flat': 1000,
//   'hotel': 3000,
//   'house': 5000,
//   'palace': 10000,
// };

// const type = document.querySelector('#type');
// const minPrice = document.querySelector('#price');

// const test = () => {
//   if (type.value === 'bungalow') {
//     minPrice.removeAttribute('placeholder');
//     minPrice.setAttribute('placeholder', `${typeHousing.bungalow}`);
//   }

//   if (type.value === 'flat') {
//     minPrice.removeAttribute('placeholder');
//     minPrice.setAttribute('placeholder', `${typeHousing.flat}`);
//   }

//   if (type.value === 'hotel') {
//     minPrice.removeAttribute('placeholder');
//     minPrice.setAttribute('placeholder', `${typeHousing.hotel}`);
//   }

//   if (type.value === 'house') {
//     minPrice.removeAttribute('placeholder');
//     minPrice.setAttribute('placeholder', `${typeHousing.house}`);
//   }

//   if (type.value === 'palace') {
//     minPrice.removeAttribute('placeholder');
//     minPrice.setAttribute('placeholder', `${typeHousing.palace}`);
//   }
// };

// const validateMinPrice = (value) => {
//   if (value === 'bungalow') {return true;} return false;
// };

// type.addEventListener('change', test);

// pristine.addValidator(minPrice, validateMinPrice, 'Ошибка');
