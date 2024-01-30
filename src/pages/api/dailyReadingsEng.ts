// pages/api/dailyReadings.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import { getCurrentFormattedDate } from '@/utils/dateFormat';

interface Reading {
  header: string;
  reference: string;
  rawText: string;
  formattedText: string;
}

interface DailyReadings {
  celebration: string;
  lectionary: number;
  readings: Reading[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { date } = req.query;
    const formattedDate = date ? getCurrentFormattedDate(new Date(date.toString())) : getCurrentFormattedDate();
    const url = `https://bible.usccb.org/bible/readings/${formattedDate}.cfm`;


    const response = await axios.get<string>(url);
    const readingData = parseReadings(response.data);
    // Check if readings array is empty
    if (readingData.readings.length === 0) {
      const alternativeUrl = `https://bible.usccb.org/bible/readings/${formattedDate}-YearB.cfm`;
      const alternativeResponse = await axios.get<string>(alternativeUrl);
      const alternativeReadingData = parseReadings(alternativeResponse.data);

      res.status(200).json({ readingData: alternativeReadingData });
    } else {
      res.status(200).json({ readingData });
    }
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

    let replaced = false;
    const formattedText = rawText.replace(/<[^>]*>/g, () => {
      if (!replaced) {
        replaced = true;
        return '\n';
      } else {
        return ' ';
      }
    });


    return {
      header,
      reference,
      rawText,
      formattedText,
    };
  }).get();

  return {
    celebration: lectionaryHeader,
    lectionary: lectionaryNumber,
    readings,
  };
}
