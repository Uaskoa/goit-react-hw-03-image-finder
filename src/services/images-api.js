import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = 'Bearer 20667808-d6e3a4866a107921c5b89b931';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20667808-d6e3a4866a107921c5b89b931';
const IMG_TYPE = 'photo';
const ORIENTATION = 'horizontal';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}
    &key=${API_KEY}&image_type=${IMG_TYPE}&orientation=${ORIENTATION}&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
