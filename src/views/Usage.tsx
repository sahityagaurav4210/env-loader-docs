import { ReactNode, useContext } from "react";
import { AppThemeContext } from "../contexts";
import Heading from "../components/Heading";
import { APP_THEME, Styles } from "../constant";
import Code from "../components/Code";
import Alert from "../components/Alert";
import { AlertTypes } from "../helpers/enums";
import { AlertIcons } from "../helpers/icons";
import Shortcut from "../components/Shortcut";

function Usage() {
  const context = useContext(AppThemeContext);

  if (!context) throw new Error("No context provided.");

  const { appTheme } = context;

  const alertContent: ReactNode = (
    <p className="text-lg lg:text-xl mt-2">
      After importing the package,{" "}
      <Shortcut
        shortcut="EnvironmentVariables"
        bgColor={appTheme === APP_THEME.DARK ? "bg-cyan-500" : "bg-green-500"}
      />{" "}
      variable has now access to all static functions provided by the package.
      Each function servers a different use case. All use cases are discussed in
      upcoming sections. Now, we will first start with our 1<sup>st</sup>{" "}
      function i.e.,{" "}
      <Shortcut
        shortcut="LoadENV"
        bgColor={appTheme === APP_THEME.DARK ? "bg-cyan-500" : "bg-green-500"}
      />
    </p>
  );
  const functionInsightContent: ReactNode = (
    <>
      <ul className="list-disc list-inside">
        <li className="text-lg lg:text-xl mt-2 font-bold text-blue-200">
          Returns - void
        </li>

        <li className="text-lg lg:text-xl mt-2 font-bold text-blue-200">
          Parameters
          <ul className="list-decimal list-inside px-5">
            <li className="text-lg lg:text-xl mt-2 font-bold text-blue-200 text-justify">
              envPath represents an array of file paths to search for
              environment variables. By default the list is{" "}
              <Shortcut shortcut="[.env]" />.
            </li>
          </ul>
        </li>

        <li className="text-lg lg:text-xl mt-2 font-bold text-blue-200">
          Function type - static
        </li>

        <li className="text-lg lg:text-xl mt-2 font-bold text-blue-200">
          Function Time Complexity - O(n)
        </li>

        <li className="text-lg lg:text-xl mt-2 font-bold text-blue-200">
          Function Space Complexity - O(1)
        </li>
      </ul>
    </>
  );
  const loadENVFunctionUsageWarning: ReactNode = (
    <>
      <p className="text-lg lg:text-xl mt-2 text-justify">
        If the package does not find any of the specified files in the project's
        root directory, it will throw an error. Please handle this gracefully.
      </p>
    </>
  );

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
      <Alert
        alertType={AlertTypes.INFO}
        title="Kindly note"
        content={alertContent}
        icon={AlertIcons.INFO}
      />
      <Heading headingText="LoadENV function" showLine={false} />
      <p
        className={
          appTheme === APP_THEME.DARK ? Styles.PARA.DARK : Styles.PARA.LIGHT
        }
      >
        Function definition
      </p>
      <Code command="static LoadENV(envPath='[.env]');" showClipboard={false} />
      <Alert
        alertType={AlertTypes.INSIGHT}
        title="Function Insights"
        content={functionInsightContent}
        icon={AlertIcons.INSIGHT}
      />
      <p
        className={
          appTheme === APP_THEME.DARK ? Styles.PARA.DARK : Styles.PARA.LIGHT
        }
      >
        Function Usage
      </p>
      <Code
        command="EnvironmentVariables.LoadENV(['.env','.env.development']);"
        showClipboard={false}
      />
      <Alert
        alertType={AlertTypes.WARN}
        title="Pay attention"
        content={loadENVFunctionUsageWarning}
        icon={AlertIcons.WARN}
      />
    </>
  );
}

export default Usage;
