import "./menu-button.css";

function MenuButton() {
  return (
    <div className="menu-button">
      <div
        class="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div class=" p-4">
          <h5 class="text-body-emphasis h4">Pepe is Cool!</h5>
          <span class="text-body-secondary">Pepe is a Menu.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default MenuButton;
