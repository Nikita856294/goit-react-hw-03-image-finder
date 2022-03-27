import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async searchQuery => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default fetchImages;
