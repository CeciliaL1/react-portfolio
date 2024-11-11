import { useState, useEffect } from "react";
import { IEducation } from "../models/IEducations";

import { get } from "../services/serviceBase";
import { Education } from "./Education";

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

  return (
    <>
      <div className="content-margin">
        <h3>Education</h3>
        {educations.map((education) => (
          <Education education={education} key={education.title}></Education>
        ))}
      </div>
    </>
  );
};
