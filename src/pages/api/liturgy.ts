// pages/api/liturgy.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchLiturgyData } from '../../utils/api/fetchLiturgyData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await fetchLiturgyData(); // Use the fetchLiturgyData function
    res.json(data);
  } catch (error: unknown) {
    console.error('Error making API request:', (error as Error).message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}