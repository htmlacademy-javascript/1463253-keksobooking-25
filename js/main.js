import { createAdvert } from './create-advert.js';
import { renderAdvert } from './render.js';
import { ADVERTS_COUNT } from './data.js';
import './form-validate.js';
import { pageActive } from './form-validate.js';
const adverts = Array.from({length: ADVERTS_COUNT}, createAdvert);

renderAdvert(adverts[0]);

const inputAddress = document.querySelector('#address');
const map = L.map('map-canvas')
  .on('load', () => {
    pageActive();
    inputAddress.value = 'LatLng(35.70647, 139.76335)';
  })

  .setView({
    lat: 35.70647009369907,
    lng: 139.76335546067685,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.70647009369907,
    lng: 139.76335546067685,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  inputAddress.value = evt.target.getLatLng();
});

const icon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

adverts.forEach((element) => {
  const miniMarker = L.marker({
    lat: element.location.lat,
    lng: element.location.lng,
  },
  {
    icon: icon,
  },
  );

  miniMarker.addTo(map);
  // .bindPopup(renderAdvert(element));
});

// Слайдер

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
valueElement.value = 5000;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 5000,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
