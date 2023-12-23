// utils/hooks/useLiturgyData.ts
import { useState, useEffect } from 'react';
import { makeApiRequest } from '../api/liturgyAPI';

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
    console.error('Error fetching liturgy data:', error);
    throw error;
  }
};

export const useLiturgyData = () => {
  const [liturgyData, setLiturgyData] = useState<any>(null);
  const [liturgicalSeason, setLiturgicalSeason] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, formattedDate } = await fetchLiturgyData();
        setLiturgyData(data);
        console.log(data);
        const season = data.season || '';
        setLiturgicalSeason(season.toLowerCase());
      } catch (error) {
        console.error('Error fetching liturgy data:', error);
      }
    };

    fetchData();
  }, []);

  const getColorScheme = () => {
    if (!liturgyData || !liturgyData.celebrations || liturgyData.celebrations.length === 0) {
      return 'blue'; // Default color if no data is available
    }

    // Map celebration colors to color schemes
    const colorMapping: Record<string, string> = {
      green: 'green',
      violet: 'purple',
      white: 'gray',
      red: 'red',
      // Add more mappings as needed
    };

    // Get the color from the first celebration (assuming it's representative)
    const firstCelebrationColor = liturgyData.celebrations[0].colour.toLowerCase();
    console.log('celebrationColor:', firstCelebrationColor);
    // Return the mapped color scheme or default to 'red'
    return colorMapping[firstCelebrationColor] || 'blue';
  };

  return { liturgyData, liturgicalSeason, getColorScheme };
};