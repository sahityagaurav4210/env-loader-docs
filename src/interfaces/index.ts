import { ReactNode } from "react";
import { AlertTypes } from "../helpers/enums";

export interface IAppThemeProvider {
  children: React.ReactNode;
}

export interface IHeadingComponentProp {
  headingText: string;
  showLine: boolean;
  formatting?: string;
}

export interface IShortcutComponentProp {
  shortcut: string;
  bgColor?: string;
}

export interface ICodeComponentProp {
  command: string;
  showClipboard: boolean;
}

export interface IAlertComponentProp {
  alertType: AlertTypes;
  title?: string;
  icon?: ReactNode;
  content?: ReactNode;
}
export interface IParagraphProp {
  formatting?: string;
  content: string;
}
