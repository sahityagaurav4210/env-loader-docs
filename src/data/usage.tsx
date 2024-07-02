import Shortcut from "../components/Shortcut";
import { AlertTypes } from "../helpers/enums";
import { AlertIcons } from "../helpers/icons";
import { IFunctionDocs } from "../interfaces/data";

export const functionDocumentation: IFunctionDocs[] = [
  {
    heading: {
      headingText: "LoadENV function",
      showLine: false,
      formatting: "p-3 bg-indigo-600 m-2 lg:w-max max-w-md rounded-md text-white",
    },
    functionDefinition: {
      content: "Function Definition",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    code: {
      command: "static LoadENV(envPath='[.env]');",
      showClipboard: false,
    },
    functionInsight: {
      alertType: AlertTypes.INSIGHT,
      title: "Function Insights",
      content: (
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
      ),
      icon: AlertIcons.INSIGHT,
    },
    functionUsage: {
      content: "Function Usage",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    usageCode: {
      command: "EnvironmentVariables.LoadENV(['.env','.env.development']);",
      showClipboard: false,
    },
    functionWarning: {
      alertType: AlertTypes.WARN,
      title: "Pay attention",
      content: (
        <>
          <p className="text-lg lg:text-xl mt-2 text-justify">
            If the package does not find any of the specified files in the
            project's root directory, it will throw an error. Please handle this
            gracefully.
          </p>
        </>
      ),
      icon: AlertIcons.WARN,
    },
    functionDescription: {
      content: "Function Description",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    functionDescPara: {
      content:
        "This function loads all the environment variables from the first found file (from the given list of file paths). For example, if a second file is present in the project root directory, it will load all the environment variables from that file.",
    },
  },
  {
    heading: {
      headingText: "LoadENVIntoVariable function",
      showLine: false,
      formatting: "p-3 bg-indigo-600 m-2 lg:w-max max-w-md rounded-md text-white",
    },
    functionDefinition: {
      content: "Function Definition",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    code: {
      command: "static LoadENVIntoVariable(['.env','.env.development']);",
      showClipboard: false,
    },
    functionInsight: {
      alertType: AlertTypes.INSIGHT,
      title: "Function Insights",
      content: (
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
      ),
      icon: AlertIcons.INSIGHT,
    },
    functionUsage: {
      content: "Function Usage",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    usageCode: {
      command:
        "EnvironmentVariables.LoadENVIntoVariable(['.env','.env.development']);",
      showClipboard: false,
    },
    functionWarning: {
      alertType: AlertTypes.WARN,
      title: "Pay attention",
      content: (
        <>
          <p className="text-lg lg:text-xl mt-2 text-justify">
            If the package does not find any of the specified files in the
            project's root directory, it will throw an error. Please handle this
            gracefully.
          </p>
        </>
      ),
      icon: AlertIcons.WARN,
    },
    functionDescription: {
      content: "Function Description",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    functionDescPara: {
      content:
        "This function loads all the environment variables from the first found file and store it in class variable called ENV. For example, if a second file is present in the project root directory, it will load all the environment variables from that file into class variable ENV.",
    },
  },
  {
    heading: {
      headingText: "LoadENVIntoCustomVariable function",
      showLine: false,
      formatting: "p-3 bg-indigo-600 m-2 lg:w-max max-w-md rounded-md text-white",
    },
    functionDefinition: {
      content: "Function Definition",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    code: {
      command:
        "static LoadENVIntoCustomVariable(['.env','.env.development'],customVariable);",
      showClipboard: false,
    },
    functionInsight: {
      alertType: AlertTypes.INSIGHT,
      title: "Function Insights",
      content: (
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
                <li className="text-lg lg:text-xl mt-2 font-bold text-blue-200 text-justify">
                  customVariable is a variable in which the all environment
                  variables will be loaded. By default the variable is{" "}
                  <Shortcut shortcut="{}" />.
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
      ),
      icon: AlertIcons.INSIGHT,
    },
    functionUsage: {
      content: "Function Usage",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    usageCode: {
      command: `const ENV = {}; // Variable in which env variable will be loaded.
      \nEnvironmentVariables.LoadENVIntoCustomVariable(['.env','.env.development'], ENV);`,
      showClipboard: false,
    },
    functionWarning: {
      alertType: AlertTypes.WARN,
      title: "Pay attention",
      content: (
        <>
          <p className="text-lg lg:text-xl mt-2 text-justify">
            If the package does not find any of the specified files in the
            project's root directory, it will throw an error. Please handle this
            gracefully.
          </p>
        </>
      ),
      icon: AlertIcons.WARN,
    },
    functionDescription: {
      content: "Function Description",
      formatting:
        "font-bold italic mt-4 underline decoration-wavy mb-2 text-sky-500",
    },
    functionDescPara: {
      content:
        "This function loads all the environment variables from the first found file and store it into custom variable provided as a 2nd argument. For example, if a second file is present in the project root directory, it will load all the environment variables from that file into provided variable.",
    },
  },
];
