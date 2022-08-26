import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = ({ defaultSearchTerm }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const search = async (inputText) => {
    const response = await youtube.get('/search', {
      params: {
        q: inputText,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};
export default useVideos;
