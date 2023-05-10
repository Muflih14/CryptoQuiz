import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
