import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className=" flex-wrap justify-content-between align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <span className=" text-body-secondary">© 2024 Pepe Star</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#"></a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
