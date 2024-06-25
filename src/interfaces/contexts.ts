import { Dispatch, SetStateAction } from "react";

export interface IAppThemeContext {
  appTheme: string;
  setAppTheme: Dispatch<SetStateAction<string>>;
}
