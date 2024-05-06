import "./footer.css";

function Footer() {
  return (
    <footer className="py-3 my-4" style={{ background: "black" }}>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/Pepele14/project-sp-3-pep"
            className="nav-link px-2 text-body-secondary"
            alt="link to github"
          >
            GitHub Repo
          </a>
        </li>
      </ul>
      <p className="text-center" style={{ color: "white" }}>
        © Cool Pepino Super Star, Inc.
      </p>
    </footer>
  );
}

export default Footer;
