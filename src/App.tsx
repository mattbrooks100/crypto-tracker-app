import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import { useRecoilState } from "recoil";
import coinState from "./coinState";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://api.coincap.io/v2/assets");
      const dataArray = res.data.data;
      setCoinData(dataArray);
    };
    fetchData();
  }, []);

  return (
    <div className="App bg-primary text-white w-screen h-screen font-poppins">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
