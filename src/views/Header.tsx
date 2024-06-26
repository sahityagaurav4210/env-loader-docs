import { useContext, useEffect } from "react";
import { APP_THEME, Styles } from "../constant";
import { AppThemeContext } from "../contexts";

function Header() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided");

  const { appTheme, setAppTheme } = context;

  useEffect(() => {
    if (appTheme === APP_THEME.LIGHT) {
      document.body.classList.remove("bg-slate-950");
      document.body.classList.add("bg-white");
    } else {
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-slate-950");
    }

    return () => {
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-slate-950");
    };

  }, [appTheme]);

  return (
    <>
      <header
        className={
          appTheme === APP_THEME.DARK ? Styles.Header.DARK : Styles.Header.LIGHT
        }
      >
        <h1 className="text-3xl lg:text-4xl font-bold">ENV Loader</h1>
        {appTheme == APP_THEME.DARK ? (
          <div className="flex justify-center gap-4">
            <i
              className="fa-regular fa-moon fa-xl"
              onClick={() => setAppTheme(APP_THEME.LIGHT)}
            ></i>
            <i className="fa-brands fa-square-github fa-2xl"></i>
          </div>
          
        ) : (
          <div className="flex justify-center gap-4">
            <i
              className="fa-regular fa-lightbulb fa-xl"
              onClick={() => setAppTheme(APP_THEME.DARK)}
            ></i>
            <i className="fa-brands fa-square-github fa-2xl"></i>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
