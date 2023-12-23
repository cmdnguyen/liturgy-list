import { useState, useEffect } from "react";
import fetchLiturgyData from "./liturgyAPI";

export const useLiturgyData = () => {
  const [liturgyData, setLiturgyData] = useState<any>(null);
  const [liturgicalSeason, setLiturgicalSeason] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currentDate.getDate().toString().padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        const data = await fetchLiturgyData(formattedDate);
        setLiturgyData(data);

        const season = data.season || "";
        setLiturgicalSeason(season.toLowerCase());
      } catch (error) {
        console.error("Error fetching liturgy data:", error);
      }
    };

    fetchData();
  }, []);

  const getColorScheme = () => {
    switch (liturgicalSeason) {
      case "advent":
        return "purple";
      case "christmas":
        return "gray";
      case "lent":
        return "purple";
      case "easter":
        return "gray";
      case "ordinary time":
        return "green";
      default:
        return "red";
    }
  };

  return { liturgyData, liturgicalSeason, getColorScheme };
};