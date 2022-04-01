import {createAdvert} from './create-advert.js';
import {renderAdvert} from './render.js';
import {ADVERTS_COUNT} from './data.js';
import './form-validate.js';
const adverts = Array.from({length: ADVERTS_COUNT}, createAdvert);

renderAdvert(adverts[0]);
