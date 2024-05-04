import Header from "../components/header";
import ImageNasa from "../components/image-nasa";
import Footer from "../components/footer";

function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <ImageNasa />
      <Footer />
    </div>
  );
}

export default HomePage;
