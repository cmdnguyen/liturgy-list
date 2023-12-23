// utils/api/fetchLiturgyData.ts
import { makeApiRequest } from './liturgyAPI';

export const fetchLiturgyData = async () => {
  try {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}/${month}/${day}`;

    const endpoint = `/calendars/default/${formattedDate}`;
    const data = await makeApiRequest(endpoint);


    return { data, formattedDate };
  } catch (error) {
    console.error('Error fetching liturgy data for fetchLiturgyData:', error);
    throw error;
  }
};