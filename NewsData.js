import axios from "axios";

const apiKey = "6efdc73835ee4bd195ee5e9df5715648";
const baseURL = "https://newsapi.org/v2/top-headlines";
const mzansi = "us";

// fix 
export const fetchNewsData = async () => {
  try {
    // request /fetch data yaMoAfrica
    // const country code = '';
   
    
    const response = await axios.get(`${baseURL}?country=${mzansi}&apiKey=${apiKey}`);
    
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    // throw error;
    return [];
  }
};
