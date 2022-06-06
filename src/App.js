import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Colab from "./components/Colab";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <Colab />
      <Footer />
    </div>
  );
}

export default App;
