import { ReactNode } from "react";
import { AlertTypes } from "../helpers/enums";

interface IHeading {
  headingText: string;
  showLine: boolean;
  formatting?: string;
}

interface IParagraph {
  content: string;
  formatting?: string;
}

interface ICode {
  command: string;
  showClipboard: boolean;
}

interface IAlert {
  alertType: AlertTypes;
  title: string;
  content: ReactNode;
  icon: ReactNode;
}

export interface IFunctionDocs {
  heading: IHeading;
  functionDefinition: IParagraph;
  code: ICode;
  usageCode: ICode;
  functionInsight: IAlert;
  functionWarning: IAlert;
  functionUsage: IParagraph;
  functionDescription: IParagraph;
  functionDescPara: IParagraph;
}
