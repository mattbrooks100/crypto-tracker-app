import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC<{}> = () => {
  return (
    <div className="body bg-primary text-white w-full overflow-hidden font-poppins">
      <Navbar />
      <div className="App text-3xl font-bold">Body</div>
      <Footer />
    </div>
  );
};

export default App;
