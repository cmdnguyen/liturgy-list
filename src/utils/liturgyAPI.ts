const fetchLiturgyData = async (date: string) => {
  try {
    const response = await fetch(`https://liturgy.day/api/day/${date}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching liturgy data for liturgy.day API:', error);
    throw error; // Rethrow the error for the component to handle
  }
};

export default fetchLiturgyData;
