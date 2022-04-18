import { DATA, SERVER } from './data.js';

const getAdvertsData = (onSuccess, onFailed) => {
  fetch(DATA)
    .then((response) => {
      if (!response.ok) {
        throw new Error (`${response.status} ${response.statusText}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onFailed(err);
    });
};

const sendAdvertData = (formData, onSuccess, onFailed) => {
  fetch(SERVER, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось получить данные');
      }
      onSuccess();
    })
    .catch((err) => {
      onFailed(err);
    });
};

export {
  getAdvertsData,
  sendAdvertData
};
