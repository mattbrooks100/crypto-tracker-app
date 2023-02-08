import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="body bg-primary text-white w-screen h-screen overflow-hidden font-poppins">
      <Navbar />
      <Hero />
      <div className="body bg-white text-black text-3xl font-bold h-80">Body</div>
      <Footer />
    </div>
  );
};

export default App;
