import '../index.css';

function Jumbotron() {
  return (
    <>
      <div
        className="relative min-h-96 p-5 border mx-2 lg:mx-0 my-4 border-sky-400 rounded-md flex items-center flex-col justify-center shadow-inner shadow-sky-700 after:opacity-20 bg-gradient-to-r from-sky-500 to-blue-600 ring-2 ring-sky-400"
        id="jumbotron"
      >
        <h1 className="text-3xl text-center lg:text-5xl font-bold font-roboto text-sky-200 mb-2 text-stroke-4 text-stoke-sky-400">
          ENV Loader{' '}
          <span className="text-sky-200/55 font-extrabold">Documentation</span>
        </h1>
        <p className="text-white tracking-wide italic font-semibold font-roboto mb-2 text-justify lg:text-center">
          A node.js package that lets you load your env variable from your
          specified list of files.
        </p>
        <div className="flex gap-4 items-center justify-evenly">
          <button
            type="button"
            className="min-w-32 p-2 rounded-md bg-sky-800 text-white/85 outline-none scale-95 focus:text-white focus:scale-110 focus:shadow-inner focus:shadow-sky-600 focus:bg-sky-950 border border-sky-400/35 focus:border-sky-400 focus:ring-2 ring-sky-400"
          >
            <i className="fa-brands fa-github mx-2"></i>View Code
          </button>
          <button
            type="button"
            className="min-w-32 p-2 rounded-md bg-sky-800 text-white/85 scale-95 focus:text-white outline-none focus:scale-110 focus:shadow-inner focus:shadow-sky-600 focus:bg-sky-950 border border-sky-400/35 focus:border-sky-400 focus:ring-2 ring-sky-400"
          >
            <i className="fa-solid fa-download mx-2"></i>Download
          </button>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
