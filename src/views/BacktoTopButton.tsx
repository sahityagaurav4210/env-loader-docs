import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import { APP_THEME, Styles } from "../constant";
import { IBacktoTopButtonProp } from "../interfaces";

function BacktoTopButton(props: IBacktoTopButtonProp) {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;
  const { isVisible } = props;

  return (
    <>
      <div
        className={
          appTheme === APP_THEME.DARK
            ? !isVisible
              ? Styles.BACKBUTTON.DARK
              : `${Styles.BACKBUTTON.DARK} hidden`
            : !isVisible
            ? Styles.BACKBUTTON.LIGHT
            : `${Styles.BACKBUTTON.LIGHT} hidden`
        }
        onClick={() => (window.location.href = "/#header")}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </>
  );
}

export default BacktoTopButton;
