import React, { ReactNode, useContext } from "react";
import { AppThemeContext } from "../contexts";
import Heading from "../components/Heading";
import { APP_THEME, Styles } from "../constant";
import Code from "../components/Code";
import Alert from "../components/Alert";
import { AlertTypes } from "../helpers/enums";
import { AlertIcons } from "../helpers/icons";
import Shortcut from "../components/Shortcut";
import Paragraph from "../components/Paragraph";
import { functionDocumentation } from "../data/usage";
import { IFunctionDocs } from "../interfaces/data";

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

      {functionDocumentation.map((doc: IFunctionDocs, index: number) => (
        <React.Fragment key={index}>
          <div id={doc.id}>
            <Heading
              headingText={doc.heading.headingText}
              showLine={doc.heading.showLine}
              formatting={doc.heading.formatting}
            />
            <Paragraph
              content={doc.functionDefinition.content}
              formatting={doc.functionDefinition.formatting}
            />
            <Code
              command={doc.code.command}
              showClipboard={doc.code.showClipboard}
            />
            <Alert
              alertType={doc.functionInsight.alertType}
              title={doc.functionInsight.title}
              content={doc.functionInsight.content}
              icon={doc.functionInsight.icon}
            />
            <Paragraph
              content={doc.functionUsage.content}
              formatting={doc.functionUsage.formatting}
            />
            <Code
              command={doc.usageCode.command}
              showClipboard={doc.usageCode.showClipboard}
            />
            <Alert
              alertType={doc.functionWarning.alertType}
              title={doc.functionWarning.title}
              content={doc.functionWarning.content}
              icon={doc.functionWarning.icon}
            />
            <Paragraph
              content={doc.functionDescription.content}
              formatting={doc.functionDescription.formatting}
            />
            <Paragraph
              content={doc.functionDescPara.content}
              formatting={doc.functionDescPara.formatting}
            />
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Usage;
