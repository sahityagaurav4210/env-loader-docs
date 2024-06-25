import { createContext } from "react";
import { IAppThemeContext } from "./interfaces/contexts";

export const AppThemeContext = createContext<IAppThemeContext|null>(null);
