import { useEffect, useState } from "react";
import { ICodeComponentProp } from "../interfaces";

function Code(props: ICodeComponentProp) {
  const { command, showClipboard } = props;
  const [isClipboardIconClicked, setIsClipboardIconClicked] =
    useState<boolean>(false);

  useEffect(() => {
    if (isClipboardIconClicked) {
      setTimeout(() => {
        setIsClipboardIconClicked((prev) => !prev);
      }, 500);
    }
  }, [isClipboardIconClicked]);

  return (
    <>
      <div className="relative mt-4 mx-1 mb-2">
        <div className="w-full bg-slate-800 p-4 text-gray-300 text-lg rounded-lg overflow-x-auto shadow-inner shadow-slate-400">
          <code>{command}</code>
          {showClipboard && (
            <div
              className="absolute right-3 lg:right-5 bottom-4 z-10"
              onClick={async () => {
                await navigator.clipboard.writeText(command);
                setIsClipboardIconClicked((prev) => !prev);
              }}
            >
              {!isClipboardIconClicked ? (
                <i className="fa-solid fa-clipboard fa-xl"></i>
              ) : (
                <i className="fa-solid fa-clipboard-check fa-xl"></i>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Code;
