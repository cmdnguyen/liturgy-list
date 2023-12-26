// api/liturgyCalendar.ts

import axios from 'axios';
import cors from 'cors';

const corsMiddleware = cors({
  origin: 'https://liturgy-checklist.vercel.app/',
  methods: ['GET'], // Add other HTTP methods if needed
  allowedHeaders: ['Content-Type'],
});

export default async function handler(req: any, res: any) {
  const { year, month, day } = req.query;
  const cal = 'default'; // Use 'default' as the default value for cal
  const apiUrl = `http://calapi.inadiutorium.cz/api/v0/en/calendars/${cal}/${year}/${month}/${day}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}