import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import { CoinCardProps } from "../../interfaces";

const CoinCard = ({ coin }: CoinCardProps) => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  return <div className="">{coin.name}</div>;
};

export default CoinCard;
