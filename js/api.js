const getAdvertsData = (onSucsess, onFailed) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then(response => {
      if (!response.ok) {
        throw new Error ({
          statusText: response.statusText,
          status: response.status,
        });
      }
      return response.json();
    })
    .then((data) => {
      onSucsess(data);
    })
    .catch((err) => {
      onFailed(err);
    });
};

export {getAdvertsData};
