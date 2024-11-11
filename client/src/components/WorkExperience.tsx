import { useState, useEffect } from "react";
import { IExperience } from "../models/IExperience";
import { get } from "../services/serviceBase";
import { Experience } from "./Experience";

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

  return (
    <>
      <div className="content-margin">
        <h3>Work Experience</h3>
        {experience.map((exp) => (
          <Experience experience={exp} key={exp.workplace}></Experience>
        ))}
      </div>
    </>
  );
};
