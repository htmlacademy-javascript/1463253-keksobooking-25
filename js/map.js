import { CENTER_TOKYO, MAP_MARKER_DEFAULT_LAT_LNG } from './data.js';
import { pageActive } from './form.js';
import { getAdvertsData } from './api.js';
import { renderAdvert } from './render.js';

const inputAddress = document.querySelector('#address');

const icon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const map = L.map('map-canvas');
map.on('load', () => {
  pageActive();
  inputAddress.value = MAP_MARKER_DEFAULT_LAT_LNG;

  const onSucsess = (adverts) => {
    adverts.forEach((advert) => {
      createMarker(advert);
    });
  };

  const onFailed = (err) => {
    const loadingErrorElement = document.createElement('div');
    loadingErrorElement.textContent = 'Не удалось загрузить данные!';
    document.body.append(loadingErrorElement);
    loadingErrorElement.style.background = 'red';
    loadingErrorElement.style.textAlign = 'center';
    loadingErrorElement.style.color = 'white';
    loadingErrorElement.style.padding = '10px';
    loadingErrorElement.style.position = 'absolute';
    loadingErrorElement.style.top = '10px';
    loadingErrorElement.style.left = '10px';
    loadingErrorElement.style.right = '10px';
    loadingErrorElement.style.borderRadius = '5px';
    loadingErrorElement.style.fontFamily = 'sans-serif';

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


// Создание главной метки
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Добавление главной метки на карту
const marker = L.marker(
  CENTER_TOKYO,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const markerGroup = L.featureGroup().addTo(map);

function createMarker (advert) {
  const miniMarker = L.marker(
    {
      lat: advert.location.lat,
      lng: advert.location.lng,
    },
    {
      icon: icon,
    }
  );

  miniMarker
    .addTo(markerGroup)
    .bindPopup(renderAdvert(advert));
}


// Определение координат при передвижении метки по карте
marker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  inputAddress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});
