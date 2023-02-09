import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import { CoinCardProps } from "../../interfaces";
import priceFormatter from "./priceFormatter";

const CoinCard = ({ coin }: CoinCardProps) => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  return (
    <div className="card flex flex-col justify-center items-center h-80 w-80 bg-white m-4 rounded-lg drop-shadow-xl">
      <div className="font-semibold text-2xl tracking-wide mb-4">
        {coin.name} - {coin.symbol}
      </div>
      <div className="card-info-container grid grid-cols-2 items-center">
        <div className="text-subtle">Price</div>
        <div className="text-bold">${priceFormatter(Number(coin.priceUsd))}</div>
        <div className="text-subtle">Market Cap</div>
        <div className="text-bold">${priceFormatter(Number(coin.marketCapUsd))}</div>
        <div className="text-subtle">Volume (24Hr)</div>
        <div className="text-bold">${priceFormatter(Number(coin.volumeUsd24Hr))}</div>
        <div className="text-subtle">Change (24Hr)</div>
        <div className="text-bold">{priceFormatter(Number(coin.changePercent24Hr))}</div>
      </div>
    </div>
  );
};

export default CoinCard;
