import axios from 'axios';

export const fetchArticles = async (category: string) => {
  const response = await axios.post(
    'https://google.serper.dev/search',
    { q: category, gl: 'us', hl: 'en' },
    { headers: { 'X-API-KEY': process.env.SERPER_API_KEY } }
  );
  return response.data.organic;
};