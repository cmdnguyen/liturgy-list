// utils/api/liturgyAPI.ts
import axios from 'axios';

export const makeApiRequest = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://calapi.inadiutorium.cz/api/v0/en${endpoint}`);
    console.log('response:', response);
    return response.data;
  } catch (error) {
    console.error('Error making API request for liturgyAPI:', error);
    throw error;
  }
};