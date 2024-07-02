function Footer() {
  return (
    <>
      <footer className="min-h-20 bg-slate-700 flex items-center justify-evenly">
        <a href={import.meta.env.VITE_APP_GITHUB_URL} target="_blank">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a href={import.meta.env.VITE_APP_MAIL_URL} target="_blank">
          <i className="fa-solid fa-envelope fa-xl"></i>
        </a>
        <a href={import.meta.env.VITE_APP_LINKEDIN_URL} target="_blank">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
      </footer>
    </>
  );
}

export default Footer;
