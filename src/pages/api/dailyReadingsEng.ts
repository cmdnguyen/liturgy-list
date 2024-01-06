// pages/api/dailyReadings.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import { getCurrentFormattedDate } from '@/utils/dateFormat';

interface Reading {
  header: string;
  reference: string;
  rawText: string;
  nonFormattedText: string;
  formattedText: string;
}

interface DailyReadings {
  header: string;
  lectionary: number;
  readings: Reading[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formattedDate = getCurrentFormattedDate();
    const url = `https://bible.usccb.org/bible/readings/${formattedDate}.cfm`;


    const response = await axios.get<string>(url);
    const readings = parseReadings(response.data);

    res.status(200).json({ readings });
  } catch (error: any) {
    console.error('Error fetching daily readings:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

function parseReadings(html: string): DailyReadings {
  const $ = cheerio.load(html);

  const lectionaryHeader = $('.b-lectionary div.innerblock h2').text().trim();
  const lectionaryNumber = parseInt($('.b-lectionary div.innerblock p').text().match(/\d+/)?.[0] || '0');

  const readingNodes = $('.b-verse');

  const readings: Reading[] = readingNodes.map((index, element) => {
    const header = $(element).find('div.content-header h3.name').text().trim();
    const reference = $(element).find('div.address a').text().trim();
    const rawText = $(element).find('div.content-body').html()?.replace(/\&nbsp;/g, '').trim() || '';

    // Additional formatting if needed
    const formattedText = rawText.replace(/<br\s*[/]?>/gi, '\n').replace(/<[^>]*>/g, '');

    return {
      header,
      reference,
      rawText,
      nonFormattedText: rawText.replace(/<br\s*[/]?>/gi, ' '),
      formattedText,
    };
  }).get();

  return {
    header: lectionaryHeader,
    lectionary: lectionaryNumber,
    readings,
  };
}
