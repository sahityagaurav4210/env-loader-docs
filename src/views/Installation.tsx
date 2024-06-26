import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import Heading from "../components/Heading";
import { APP_THEME, Styles } from "../constant";
import Shortcut from "../components/Shortcut";
import Code from "../components/Code";

function Installation() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;

  return (
    <>
      <Heading headingText="Installation" showLine={true} />
      <p
        className={
          appTheme === APP_THEME.DARK
            ? Styles.INSTALLATION.PARA.DARK
            : Styles.INSTALLATION.PARA.LIGHT
        }
      >
        Follow the following commands
      </p>
      
      <ol
        className={
          appTheme === APP_THEME.DARK
            ? Styles.INSTALLATION.LIST.DARK
            : Styles.INSTALLATION.LIST.LIGHT
        }
      >
        <li className="mb-2">
          On your computer type shortcut
          <Shortcut shortcut="CTRL+ALT+T" />
          for ubuntu and <Shortcut shortcut="Win+X" /> then I for windows to
          open your terminal.
        </li>
        <li className="mb-2">Go into your project's root directory.</li>
        <li className="mb-2">
          Now copy the following command to install the package in your project.
        </li>
      </ol>

      <Code command="npm install @book-junction/env-loader" showClipboard={true} />
    </>
  );
}

export default Installation;
