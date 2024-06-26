export interface IAppThemeProvider {
  children: React.ReactNode;
}

export interface IHeadingComponentProp {
  headingText: string;
  showLine: boolean;
}

export interface IShortcutComponentProp {
  shortcut: string;
}

export interface ICodeComponentProp {
  command: string;
  showClipboard: boolean;
}
