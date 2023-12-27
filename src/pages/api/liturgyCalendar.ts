// pages/api/liturgyCalendar.ts

import axios from 'axios';
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000', 'https://liturgy-checklist.vercel.app'];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    // Check if the request origin is in the allowedOrigins array or if it's undefined (e.g., when the request doesn't include an Origin header)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});


export default async function handler(req: any, res: any) {
  // Use the corsMiddleware before your route handler
  await new Promise<void>((resolve, reject) => {
    corsMiddleware(req, res, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
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