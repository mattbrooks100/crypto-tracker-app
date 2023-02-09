import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import CoinCard from "./CoinCard";

const Body = () => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  return (
    <div className="w-full bg-gray-100 text-black flex justify-center">
      <div className="body flex flex-wrap justify-center max-w-screen-xl">
        {coinData.map((coin, i) => (
          <CoinCard key={i} coin={coin} className="" />
        ))}
      </div>
    </div>
  );
};

export default Body;
