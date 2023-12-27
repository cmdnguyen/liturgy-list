// pages/api/dailyReadings.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getCatholicDailyReadings, DailyReadings, Reading } from 'get-catholic-daily-readings';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Customize the API request based on your logic (in this case, using the current date)
    const currentDate = new Date();
    const readings: DailyReadings = await getCatholicDailyReadings(currentDate);

    // // Accessing individual readings
    // readings.readings.forEach((reading: Reading) => {
    //   console.log('Header:', reading.header);
    //   console.log('Reference:', reading.reference);
    //   console.log('Formatted Text:', reading.formattedText);
    //   console.log('---');
    // });

    // Respond with the readings or a success message
    res.status(200).json({ readings });
  } catch (error) {
    console.error('Error fetching daily readings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}