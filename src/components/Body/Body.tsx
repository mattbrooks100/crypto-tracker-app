import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import CoinCard from "./CoinCard";

const Body = () => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  return (
    <div className="body">
      {coinData.map((coin) => (
        <CoinCard key={coin.id} coin={coin} className="" />
))}
    </div>
  );
};

export default Body;
