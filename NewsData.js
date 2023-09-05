import axios from 'axios';

const apiKey = '6efdc73835ee4bd195ee5e9df5715648';
const baseURL = 'https://newsapi.org/v2/top-headlines';

export const fetchNewsData = async () => {
  try {
    // request /fetch data
    const response = await axios.get(`${baseURL}?apiKey=${apiKey}&country=us`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    // throw error;
    return [];
  }
};
