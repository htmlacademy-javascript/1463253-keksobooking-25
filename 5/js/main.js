import {createOffer} from './data.js';
const createOfferList = Array.from({length: 4}, createOffer);
const mapContainer = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
// const similarPopup = createOfferList;

createOfferList.forEach(() => {
  const cardPopup = cardTemplate.cloneNode(true);
  cardPopup.querySelector('.popup__title').textContent = createOffer().offer.title;
  cardPopup.querySelector('.popup__text--address').textContent = createOffer().offer.address;
  cardPopup.querySelector('.popup__text--price').textContent = createOffer().offer.price + '₽/ночь';
  



  mapContainer.appendChild(cardPopup);
})


