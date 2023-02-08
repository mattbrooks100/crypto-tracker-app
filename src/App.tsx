import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { useRecoilState } from "recoil";
import coinState from "./coinState";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  useEffect(() => {
    axios("https://api.coincap.io/v2/assets").then((res) => {
      const data = res.data;
      setCoinData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App bg-primary text-white w-screen h-screen overflow-hidden font-poppins">
      <Navbar />
      <Hero />
      <div className="body bg-white text-black text-3xl font-bold h-80">Body</div>
      <Footer />
    </div>
  );
};

export default App;
