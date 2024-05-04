import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container">
        {/* my logo here below */}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <img
              className="bi me-2"
              src="/assets/logo.png"
              alt="F-OBS Logo"
              width="40"
              height="32"
            />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/Launches" className="nav-link px-2 link-body-emphasis">
                Launches
              </Link>
            </li>
            <li>
              <Link to="/News" className="nav-link px-2 link-body-emphasis">
                News
              </Link>
            </li>
          </ul>

          <div className="dropdown text-end">
            <Link
              to="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </Link>
            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
