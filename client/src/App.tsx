import "./App.css";
import { IProject } from "./models/IProject";
import { get } from "./services/serviceBase";

const getProjects = async () => {
  const projects = await get<IProject>("http://localhost:3000");
  return projects;
};

const data = await getProjects();
console.log(data);

function App() {
  return (
    <>
      <h1>Cecilia Portfolio</h1>
    </>
  );
}

export default App;
