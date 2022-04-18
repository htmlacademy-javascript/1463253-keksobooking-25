import { DATA, SERVER } from './data.js';

const getAdvertsData = (onSucsess, onFailed) => {
  fetch(DATA)
    .then((response) => {
      if (!response.ok) {
        throw new Error (`${response.status} ${response.statusText}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      onSucsess(data);
    })
    .catch((err) => {
      onFailed(err);
    });
};

export {getAdvertsData};
