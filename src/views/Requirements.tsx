import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import Heading from "../components/Heading";
import { APP_THEME, Styles } from "../constant";

function Requirements() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;

  return (
    <>
      <Heading headingText="Package Requirements" showLine={true} />
      <p
        className={
          appTheme === APP_THEME.DARK
            ? Styles.Author.PARA.DARK
            : Styles.Author.PARA.LIGHT
        }
      >
        This package does not require any additional software, package or
        library except Node.js to run.
      </p>
    </>
  );
}

export default Requirements;
