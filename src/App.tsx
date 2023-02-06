import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC<{}> = () => {
  return (
    <div className="">
      <Navbar />
      <div className="App text-3xl font-bold">Hello</div>
      <Footer />
    </div>
  );
};

export default App;
