import { IToolTipProp } from "../interfaces";

function Tooltip({ text }: IToolTipProp) {
  const toolTipText = text.split("https://github.com/");

  return (
    <>
      <div className="w-max max-w-44 bg-gray-800 text-white absolute hidden group-hover:block bottom-1/2 right-1 rounded-lg p-2 translate-x-6 md:translate-x-4 -translate-y-1/2 break-words z-10">
        {toolTipText[1]}
      </div>
    </>
  );
}

export default Tooltip;
