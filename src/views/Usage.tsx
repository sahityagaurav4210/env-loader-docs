import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import Heading from "../components/Heading";
import { APP_THEME, Styles } from "../constant";
import Code from "../components/Code";
import Alert from "../components/Alert";

function Usage() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;

  return (
    <>
      <Heading headingText="Usage" showLine={true} />
      <p
        className={
          appTheme === APP_THEME.DARK ? Styles.PARA.DARK : Styles.PARA.LIGHT
        }
      >
        The package is easy to use. Follow the following code in order to use
        it.
      </p>
      <Code
        command="const EnvironmentVariables = require('@book-junction/env-loader');"
        showClipboard={true}
      />
      <Alert/>
    </>
  );
}

export default Usage;
