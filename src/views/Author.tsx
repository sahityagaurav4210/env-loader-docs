import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import { APP_THEME, Styles } from "../constant";

function Author() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided");

  const { appTheme } = context;

  return (
    <>
      <h1
        className={
          appTheme === APP_THEME.DARK ? Styles.Author.DARK : Styles.Author.LIGHT
        }
      >
        Author
      </h1>
      <hr className={appTheme === APP_THEME.DARK ? Styles.Author.HR.DARK : Styles.Author.HR.LIGHT} />

      <p className="text-white text-lg lg:text-xl text-justify px-2 lg:px-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa illo nam explicabo! Tempora, vel explicabo ipsa natus sed commodi quibusdam, ea a, incidunt laboriosam nemo in eum eaque magni quis.</p>
    </>
  );
}

export default Author;
