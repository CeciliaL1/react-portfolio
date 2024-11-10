import { useState, useEffect } from "react";
import { IExperience } from "../models/IExperience";
import { get } from "../services/serviceBase";

export const WorkExperience = () => {
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const getExperience = async () => {
      const response = await get<IExperience[]>(
        "http://localhost:3000/workexperience"
      );

      setExperience(response);
      setIsFetched(true);
    };
    if (!isFetched) {
      getExperience();
    }
  });

  return <>WorkExperience</>;
};
