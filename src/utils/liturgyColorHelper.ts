// utils/liturgyColorHelper.ts

import { useState, useEffect } from "react";
import axios from 'axios';

export const useLiturgyData = () => {
  const [liturgyData, setLiturgyData] = useState<any>(null);
  const [liturgicalSeason, setLiturgicalSeason] = useState<string>("");
  const [colorScheme, setColorScheme] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currentDate.getDate().toString().padStart(2, "0");

        const response = await axios.get(`/api/liturgyCalendar?year=${year}&month=${month}&day=${day}`);
        const data = response.data;
        setLiturgyData(data);

        const firstCelebrationColor = data?.celebrations[0]?.colour || "";
        setColorScheme(getColorSchemeFromColor(firstCelebrationColor));

      } catch (error) {
        console.error("Error fetching liturgy data from calapi:", error);
      }
    };

    fetchData();
  }, []);
  const getColorSchemeFromColor = (color: string) => {
    switch (color.toLowerCase()) {
      case "white":
        return "gray";
      case "red":
        return "red";
      case "violet":
        return "purple";
      case "green":
        return "green";
      default:
        return "blue";
    }
  };

  return { liturgyData, liturgicalSeason, colorScheme };
};



