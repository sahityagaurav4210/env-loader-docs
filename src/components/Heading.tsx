import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import { IHeadingComponentProp } from "../interfaces";
import { APP_THEME, Styles } from "../constant";

function Heading(props: IHeadingComponentProp) {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided");

  const { appTheme } = context;
  const { headingText, showLine } = props;

  return (
    <>
      <h1
        className={
          appTheme === APP_THEME.DARK ? Styles.Author.DARK : Styles.Author.LIGHT
        }
      >
        {headingText}
      </h1>

      {showLine && (
        <hr
          className={
            appTheme === APP_THEME.DARK
              ? Styles.Author.HR.DARK
              : Styles.Author.HR.LIGHT
          }
        />
      )}
    </>
  );
}

export default Heading;