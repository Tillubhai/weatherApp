const axios = require('axios');
const { apiUrl, apiKey } = require('../config');

const fetchData = async (q, appId) => {
  if (!q || !appId) {
    throw new Error('City and API key are required');
  }

  try {
    const url = `${apiUrl}?q=${encodeURIComponent(q)}&appId=${encodeURIComponent(appId)}`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data from API');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch weather data');
  }
};

module.exports = fetchData;
