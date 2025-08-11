import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as pixabayFoo from './js/pixabay-api';
import * as renderFoo from './js/render-functions';

const formSearch = document.querySelector('form');

formSearch.addEventListener('submit', event => {
  event.preventDefault();
  const inputSearch = formSearch.querySelector('input');

  renderFoo.showLoader();
  renderFoo.clearGallery();

  pixabayFoo
    .getImagesByQuery(inputSearch.value)
    .then(data => {
      renderFoo.hideLoader();

      if (data.hits.length === 0) {
        iziToast.error({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomCenter',
        });
        return;
      }
      renderFoo.createGallery(data.hits);
      console.log(data.hits);
    })
    .catch(errorMessage => {
      renderFoo.hideLoader();

      iziToast.error({
        title: 'Error happened',
      });
      console.log(errorMessage);
    });
});
