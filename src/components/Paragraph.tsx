import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import { IParagraphProp } from "../interfaces";
import { APP_THEME, Styles } from "../constant";

function Paragraph(props: IParagraphProp) {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;
  const { formatting, content } = props;

  if (!formatting)
    return (
      <p
        className={
          appTheme === APP_THEME.DARK ? Styles.PARA.DARK : Styles.PARA.LIGHT
        }
      >
        {content}
      </p>
    );

  return (
    <p
      className={
        appTheme === APP_THEME.DARK
          ? `${Styles.PARA.DARK} ${formatting}`
          : `${Styles.PARA.LIGHT} ${formatting}`
      }
    >
      {content}
    </p>
  );
}

export default Paragraph;