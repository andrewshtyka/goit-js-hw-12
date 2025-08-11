import axios from 'axios';
import iziToast from 'izitoast';

const MY_API_KEY = '51687236-e99e958891c77c47ce6f4e325';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: MY_API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
