// utils/hooks/useLiturgyData.ts
import { useState, useEffect } from 'react';
import { makeApiRequest } from '../api/liturgyAPI';

export const useLiturgyData = () => {
  const [liturgyData, setLiturgyData] = useState<any>(null);
  const [liturgicalSeason, setLiturgicalSeason] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}/${month}/${day}`;

        const endpoint = `/calendars/default/${formattedDate}`;
        const data = await makeApiRequest(endpoint);

        setLiturgyData(data);

        const season = data.season || '';
        setLiturgicalSeason(season.toLowerCase());
        console.log('API Response:', data);
      } catch (error) {
        console.error('Error fetching liturgy data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  const getColorScheme = () => {
    if (!liturgyData || !liturgyData.celebrations || liturgyData.celebrations.length === 0) {
      return 'blue'; // Default color if no data is available
    }

    const colorMapping: Record<string, string> = {
      green: 'green',
      violet: 'purple',
      white: 'gray',
      red: 'red',
      // Add more mappings as needed
    };

    const firstCelebrationColor = liturgyData.celebrations[0].colour.toLowerCase();

    return colorMapping[firstCelebrationColor] || 'blue';
  };

  return { liturgyData, liturgicalSeason, getColorScheme, loading };
};