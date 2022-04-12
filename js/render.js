import {HotelTypes} from './data.js';
const cardTemplate = document.querySelector('#card').content;
/**
 * Функуия возвращает заполненный полученными данными шаблон объявления и добавялет уже заполненный шаблон в разметку в блок с картой
 * @param {Object} advert - объявление
 * @returns {HTMLElement}
 */
const renderAdvert = (advert) => {
  const cardPopupElement = cardTemplate.cloneNode(true);
  const photoElementTemplate = cardPopupElement.querySelector('.popup__photo');
  const photosContainerElement = cardPopupElement.querySelector('.popup__photos');
  const featuresContainerElement = cardPopupElement.querySelector('.popup__features');
  photosContainerElement.innerHTML = '';
  featuresContainerElement.innerHTML = '';
  cardPopupElement.querySelector('.popup__title').textContent = advert.offer.title;
  cardPopupElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  cardPopupElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;
  cardPopupElement.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  cardPopupElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin} выезд до ${advert.offer.checkout}`;
  if (!advert.offer.description) {
    cardPopupElement.querySelector('.popup__description').classList.add('hidden');
  }

  if (!advert.offer.description) {
    cardPopupElement.querySelector('.popup__description').classList.add('hidden');
  }

  cardPopupElement.querySelector('.popup__description').textContent = advert.offer.description;
  cardPopupElement.querySelector('.popup__avatar').src = advert.author.avatar;
  cardPopupElement.querySelector('.popup__type').textContent = HotelTypes[advert.offer.type];

  if (advert.offer.photos.length === 0) {
    photosContainerElement.classList.add('hidden');
  } else {
    advert.offer.photos.forEach((photo) => {
      const photoElement = photoElementTemplate.cloneNode(true);
      photoElement.src = photo;
      photosContainerElement.appendChild(photoElement);
    });
  }

  if (advert.offer.features.length === 0) {
    featuresContainerElement.classList.add('hidden');
  } else {
    advert.offer.features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresContainerElement.appendChild(featureElement);
    });
  }
  return cardPopupElement;
};

const renderAdverts = (adverts) => {
  adverts.forEach((advert) => {
    renderAdvert(advert);
  });
};

export {renderAdvert, renderAdverts};
