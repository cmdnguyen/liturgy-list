// pages/api/dailyReadings.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getCatholicDailyReadings, DailyReadings } from 'get-catholic-daily-readings';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const currentDate = new Date();
    const readings: DailyReadings = await getCatholicDailyReadings(currentDate);

    res.status(200).json({ readings });
  } catch (error: any) {
    console.error('Error fetching daily readings:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}