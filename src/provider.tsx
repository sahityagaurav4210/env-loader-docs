import { ReactNode, useState } from "react";
import { AppThemeContext } from "./contexts";
import { IAppThemeProvider } from "./interfaces";
import { APP_THEME } from "./constant";

export const AppThemeProvider: React.FC<IAppThemeProvider> = function ({
  children,
}: {
  children: ReactNode;
}) {
  const [appTheme, setAppTheme] = useState<string>(APP_THEME.DARK);

  return (
    <AppThemeContext.Provider value={{ appTheme, setAppTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
