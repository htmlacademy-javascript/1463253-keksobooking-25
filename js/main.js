import {createAdvert} from './create-advert';
const mapContainer = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
const adverts = Array.from({length: 4}, createAdvert);

const renderOffers = () => {
  const offersFragment = Document.createDocumentFragment();
};

adverts.forEach((advert) => {
  const cardPopupElement = cardTemplate.cloneNode(true);
  const photoElementTemplate = cardPopupElement.querySelector('.popup__photo');
  const photosContainerElement = cardPopupElement.querySelector('.popup__photos');
  photosContainerElement.innerHTML = '';
  cardPopupElement.querySelector('.popup__title').textContent = advert.offer.title;
  cardPopupElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  cardPopupElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;
  cardPopupElement.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  cardPopupElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin} выезд до ${advert.offer.checkout}`;
  cardPopupElement.querySelector('.popup__description').textContent = advert.offer.description;

  for (let i = 0; i < advert.offer.photos.length - 1; i++) {
    const photoElement = photoElementTemplate.cloneNode(true);
    photoElement.src = advert.offer.photos[i];
    photosContainerElement.appendChild(photoElement);
    // cardPopup.querySelector('.popup__photos').insertAdjacentHTML('afterbegin', photoElementTemplate);
  }

  mapContainer.appendChild(cardPopupElement);
});


