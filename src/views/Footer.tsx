function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-white">
        <div className="flex items-center justify-evenly min-h-20">
          <a href={import.meta.env.VITE_APP_GITHUB_URL} target="_blank">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href={import.meta.env.VITE_APP_MAIL_URL} target="_blank">
            <i className="fa-solid fa-envelope fa-xl"></i>
          </a>
          <a href={import.meta.env.VITE_APP_LINKEDIN_URL} target="_blank">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </div>

        <p className="text-sm text-center font-semibold text-slate-400 font-roboto italic">Designed and developed by Gaurav Sahitya.</p>
      </footer>
    </>
  );
}

export default Footer;
