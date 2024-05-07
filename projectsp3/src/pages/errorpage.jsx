import React from "react";
import page404 from "../assets/404logo.png";
import Header from "../components/header";
import Footer from "../components/footer";

function ErrorPage() {
  return (
    <div>
      <Header />
      <img src={page404} style={{ width: "100%" }}></img>
      <Footer />
    </div>
  );
}

export default ErrorPage;
