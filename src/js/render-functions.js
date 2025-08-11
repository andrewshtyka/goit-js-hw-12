import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function createGallery(images) {
  const galleryResult = document.querySelector('.gallery');

  const markup = images
    .map(
      element => `
        <li class='gallery-item'>
            <a href='${element.largeImageURL}'>
                <img class='gallery-img' src='${element.webformatURL}' alt='${element.tags}'>
                <ul class='gallery-item-info'>
                    <li class='text-info'>Likes<span class='text-info-data'>${element.likes}</span></li>
                    <li class='text-info'>Views<span class='text-info-data'>${element.views}</span></li>
                    <li class='text-info'>Comments<span class='text-info-data'>${element.comments}</span></li>
                    <li class='text-info'>Downloads<span class='text-info-data'>${element.downloads}</span></li>
                </ul>
            </a>
        </li>
    `
    )
    .join('');

  galleryResult.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {});
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader')?.classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader')?.classList.add('hidden');
}
