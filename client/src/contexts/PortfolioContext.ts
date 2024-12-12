import { createContext } from "react";
import { IProject } from "../models/IProject.ts";


interface IProjectContext {
    projects: IProject[]
}

export const PortfolioContext = createContext<IProjectContext>({projects: []});