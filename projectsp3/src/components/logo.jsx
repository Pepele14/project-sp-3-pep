import logo from "../assets/logo-color.png";

function Logo() {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "calc(100% - 8px)", // 25% width minus border and spacing
        margin: "4px",
        boxSizing: "border-box",
        overflow: "hidden",
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <img src={logo} alt="Logo" style={{ width: "25%", height: "auto" }}></img>
    </div>
  );
}

export default Logo;
