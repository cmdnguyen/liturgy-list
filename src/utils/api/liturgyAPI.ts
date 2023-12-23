// utils/api/liturgyAPI.ts
import axios from 'axios';

export const makeApiRequest = async (endpoint: string) => {
  try {
    const apiUrl = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default';
    const response = await axios.get(apiUrl);
    console.log('API response from utils/api/liturgyAPI:', response);
    return response.data;
  } catch (error) {
    console.error('Error making API request for liturgyAPI:', error);
    throw error;
  }
};