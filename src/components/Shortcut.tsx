import { useContext } from "react";
import { IShortcutComponentProp } from "../interfaces";
import { AppThemeContext } from "../contexts";
import { APP_THEME, Styles } from "../constant";

function Shortcut(props: IShortcutComponentProp) {
  const { shortcut } = props;
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;

  return (
    <>
      <code
        className={
          appTheme === APP_THEME.DARK
            ? Styles.INSTALLATION.CODE.DARK
            : Styles.INSTALLATION.CODE.LIGHT
        }
      >
        {shortcut}
      </code>
    </>
  );
}

export default Shortcut;
