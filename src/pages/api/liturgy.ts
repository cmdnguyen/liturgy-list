// pages/api/liturgy.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { useLiturgyData } from '../../utils/hooks/useLiturgyData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { liturgyData } = useLiturgyData(); // Use the hook directly
    res.json(liturgyData);
  } catch (error: unknown) {
    console.error('Error making API request:', (error as Error).message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}