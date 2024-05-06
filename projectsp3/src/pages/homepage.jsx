import Header from "../components/header";
import ImageNasa from "../components/image-nasa";
import Footer from "../components/footer";
import DSCOVRImages from "../components/DSCOVR-images";
import MarsImages from "../components/Mars-images";
import Logo from "../components/logo";

function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Logo />
      <DSCOVRImages />
      {/* <ImageNasa /> */}
      <MarsImages />
      <Footer />
    </div>
  );
}

export default HomePage;
