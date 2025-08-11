import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as pixabayFoo from './js/pixabay-api';
import * as renderFoo from './js/render-functions';

const formSearch = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;
const PER_PAGE = 15;

async function handleRequest(isNewSearch = false) {
  renderFoo.showLoader();
  if (isNewSearch) renderFoo.clearGallery();

  try {
    const data = await pixabayFoo.getImagesByQuery(currentQuery, currentPage);
    renderFoo.hideLoader();

    if (isNewSearch && !data.hits.length) {
      renderFoo.hideLoadMoreButton();
      iziToast.error({
        title:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomCenter',
      });
      return;
    }

    renderFoo.createGallery(data.hits);

    if (!isNewSearch) {
      const galleryItem = document
        .querySelector('.gallery-item')
        .getBoundingClientRect();
      if (galleryItem) {
        window.scrollBy({
          top: galleryItem.height * 2,
          behavior: 'smooth',
        });
      }
    }

    if (isNewSearch) totalHits = data.totalHits;

    if (currentPage * PER_PAGE >= totalHits || !data.hits.length) {
      renderFoo.hideLoadMoreButton();
      iziToast.info({
        title: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
      });
    } else {
      renderFoo.showLoadMoreButton();
    }
  } catch (error) {
    renderFoo.hideLoader();
    iziToast.error({ title: 'Error happened' });
    console.error(error);
  }
}

formSearch.addEventListener('submit', event => {
  event.preventDefault();

  currentQuery = formSearch.querySelector('input').value.trim();

  if (!currentQuery) return;

  currentPage = 1;
  totalHits = 0;
  handleRequest(true);
});

loadMoreBtn.addEventListener('click', () => {
  currentPage++;
  handleRequest();
});
