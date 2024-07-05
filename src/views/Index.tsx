function Index() {
  return (
    <>
      <section className="w-96 max-w-xs sm:max-w-sm lg:max-w-md m-auto md:mx-2 lg:mx-0 bg-violet-900 text-white p-4 mt-2 rounded-lg shadow-inner shadow-violet-600 font-arial">
        <h1 className="font-bold text-xl underline underline-offset-8 decoration-2 italic">
          On this page
        </h1>
        <div className="px-4 mt-3">
          <p>
            <i className="fa-solid fa-hand-point-right mx-1"></i>
            <a href="#author">Contributors</a>
          </p>
          <p>
            <i className="fa-solid fa-hand-point-right mx-1"></i>
            <a href="#about">About</a>
          </p>
          <p>
            <i className="fa-solid fa-hand-point-right mx-1"></i>
            <a href="#requirements">Package Requirements</a>
          </p>
          <p>
            <i className="fa-solid fa-hand-point-right mx-1"></i>
            <a href="#installation">Installation</a>
          </p>
          <div>
            <p>
              <i className="fa-solid fa-hand-point-right mx-1"></i>
              <a href="#usage">Usage</a>
            </p>
            <ol className="list-outside list-disc px-8">
              <li>
                <a href="#loadENV">LoadENV</a>
              </li>
              <li>
                <a href="#loadENVIntoVariable">LoadENVIntoVariable</a>
              </li>
              <li>
                <a href="#loadENVIntoCustomVariable">
                  LoadENVIntoCustomVariable
                </a>
              </li>
              <li>
                <a href="#loadENVIntoGlobals">LoadENVIntoGlobals</a>
              </li>
            </ol>
          </div>
          <p>
            <i className="fa-solid fa-hand-point-right mx-1"></i>
            <a href="#misc">Others</a>
          </p>
        </div>
      </section>
    </>
  );
}
export default Index;
