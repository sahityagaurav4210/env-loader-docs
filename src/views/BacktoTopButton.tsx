import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import { APP_THEME, Styles } from "../constant";

function BacktoTopButton() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;

  return (
    <>
      <div
        className={
          appTheme === APP_THEME.DARK
            ? Styles.BACKBUTTON.DARK
            : Styles.BACKBUTTON.LIGHT
        }
        onClick={() => (window.location.href = "/#header")}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </>
  );
}

export default BacktoTopButton;
