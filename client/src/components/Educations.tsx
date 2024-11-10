import { useState, useEffect } from "react";
import { IEducation } from "../models/IEducations";

import { get } from "../services/serviceBase";

export const Educations = () => {
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const getEducations = async () => {
      const response = await get<IEducation[]>(
        "http://localhost:3000/educations"
      );

      setEducations(response);
      setIsFetched(true);
    };
    if (!isFetched) {
      getEducations();
    }
  });

  console.log("educations", educations);

  return <></>;
};
