// pages/api/liturgy.ts
import { Request, Response } from 'express';
import { useLiturgyData } from '../../utils/hooks/useLiturgyData';

export default async function handler(req: Request, res: Response) {
    try {
        
        const data = useLiturgyData(); // Remove the argument from the function call
        res.json(data);
    } catch (error: unknown) { // Add type assertion to specify the type of 'error' as 'Error'
        console.error('Error making API request:', (error as Error).message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}