import { createAdvert } from './create-advert.js';
import { renderAdvert } from './render.js';
import { getAdvertsData } from './api.js';
import { ADVERTS_COUNT, MAP_MARKER_DEFAULT_LAT_LNG } from './data.js';
import './form-validate.js';
import { pageActive } from './form-validate.js';
const adverts = Array.from({length: ADVERTS_COUNT}, createAdvert);

const inputAddress = document.querySelector('#address');

const icon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const map = L.map('map-canvas')
  .on('load', () => {
    pageActive();
    inputAddress.value = MAP_MARKER_DEFAULT_LAT_LNG;

    const onSucsess = (adverts) => {
      adverts.forEach((advert) => {
        const miniMarker = L.marker({
          lat: advert.location.lat,
          lng: advert.location.lng,
        },
        {
          icon: icon,
        },
        );

        miniMarker
          .addTo(map)
          .bindPopup(renderAdvert(advert));
      });
    };
    const onFailed = (err) => {
      // console.log(err);
    };
    getAdvertsData(onSucsess, onFailed);
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
  const {lat, lng} = evt.target.getLatLng();
  inputAddress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

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

