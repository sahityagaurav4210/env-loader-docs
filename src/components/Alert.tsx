import Shortcut from "./Shortcut";

function Alert() {
  return (
    <>
      <div className="max-w-lg bg-cyan-900 text-white p-4 mx-2 rounded-lg mb-2">
        <p className="text-lg font-bold p-2 w-max bg-cyan-700 rounded-xl shadow-inner shadow-cyan-500">
          <i className="fa-solid fa-circle-info fa-xl"></i> Kindly note
        </p>
        <p className="text-lg mt-2">
          After importing the package,{" "}
          <Shortcut shortcut="EnvironmentVariables" /> variable has now access
          to all static functions provided by the package. Each function servers
          a different use case. All use cases are discussed in upcoming
          sections. Now, we will first start with our 1<sup>st</sup> function
          i.e., <Shortcut shortcut="LoadENV" />.
        </p>
      </div>
    </>
  );
}

export default Alert;
