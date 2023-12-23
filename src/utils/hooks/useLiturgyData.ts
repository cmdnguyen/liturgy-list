// utils/hooks/useLiturgyData.ts
import { useState, useEffect } from 'react';
import { fetchLiturgyData } from '../api/fetchLiturgyData';

export const useLiturgyData = () => {
  const [liturgyData, setLiturgyData] = useState<any>(null);
  const [liturgicalSeason, setLiturgicalSeason] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, formattedDate } = await fetchLiturgyData();
        setLiturgyData(data);

        const season = data.season || '';
        setLiturgicalSeason(season.toLowerCase());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching liturgy data for useLiturgyData:', error);
        setLoading(false);
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