import { useContext } from "react";
import { AppThemeContext } from "../contexts";
import Heading from "../components/Heading";
import { APP_THEME, Styles } from "../constant";

function About() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context is provided");

  const { appTheme } = context;

  return (
    <>
      <Heading headingText="About" showLine={true} />
      <p
        className={
          appTheme === APP_THEME.DARK
            ? Styles.Author.PARA.DARK
            : Styles.Author.PARA.LIGHT
        }
      >
        It is an npm package that helps developers load their environment variables from a given list of files. It can also load all the variables into a custom variable provided or add them to Node's global variables, among other capabilities.
      </p>
    </>
  );
}

export default About;
