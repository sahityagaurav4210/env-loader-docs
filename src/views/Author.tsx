import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import { APP_THEME, Styles } from "../constant";
import Heading from "../components/Heading";

function Author() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided");

  const { appTheme } = context;

  return (
    <>
      <Heading headingText="Contributors" showLine={true} />
      <p
        className={
          appTheme === APP_THEME.DARK
            ? Styles.Author.PARA.DARK
            : Styles.Author.PARA.LIGHT
        }
      >
        <a
          href={import.meta.env.VITE_APP_LINKEDIN_URL}
          target="_blank"
          className="text-lg lg:text-xl text-blue-600"
        >
          Gaurav Sahitya
        </a>
      </p>
    </>
  );
}

export default Author;
