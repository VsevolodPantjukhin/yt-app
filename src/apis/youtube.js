import axios from 'axios';

const KEY = 'AIzaSyBdDPo7rY6TWUD2RojwWnKmaH6DjOHnY-4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
