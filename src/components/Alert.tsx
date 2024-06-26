import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import { IAlertComponentProp } from "../interfaces";
import { APP_THEME, Styles } from "../constant";

function Alert(props: IAlertComponentProp) {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided");

  const { appTheme } = context;
  const { alertType, title, icon, content } = props;

  return (
    <>
      <div
        className={
          appTheme === APP_THEME.DARK
            ? Styles.ALERT[alertType].DIV.DARK
            : Styles.ALERT[alertType].DIV.LIGHT
        }
      >
        <p
          className={
            appTheme === APP_THEME.DARK
              ? Styles.ALERT[alertType].PARA.DARK
              : Styles.ALERT[alertType].PARA.LIGHT
          }
        >
          {icon} {title}
        </p>
        {content}
      </div>
    </>
  );
}

export default Alert;
