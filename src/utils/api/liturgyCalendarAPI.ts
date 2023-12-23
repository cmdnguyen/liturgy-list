// utils/api/liturgyCalendarAPI.ts
import axios from 'axios';

export const makeCalendarApiRequest = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://calapi.inadiutorium.cz/api/v0/en/calendars/default${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error making calendar API request:', error);
    throw error;
  }
};