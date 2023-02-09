import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import { CoinCardProps } from "../../interfaces";
import priceFormatter from "./priceFormatter";
import negativePrice from "./negativePrice";

const CoinCard = ({ coin }: CoinCardProps) => {
  const [coinData, setCoinData] = useRecoilState(coinState);
  const changePrice = priceFormatter(Number(coin.changePercent24Hr));
  console.log(negativePrice(changePrice));

  return (
    <div className="card flex flex-col justify-center items-center h-80 w-80 bg-white m-4 rounded-lg drop-shadow-xl">
      <div className="font-semibold text-2xl tracking-wide mb-4">
        {coin.name} - {coin.symbol}
      </div>
      <div className="card-info-container grid items-center w-full px-8">
        <div className="info-container">
          <div className="text-subtle">Price</div>
          <div className="text-bold">${priceFormatter(Number(coin.priceUsd))}</div>
        </div>
        <div className="info-container">
          <div className="text-subtle">Market Cap</div>
          <div className="text-bold">${priceFormatter(Number(coin.marketCapUsd))}</div>
        </div>
        <div className="info-container">
          <div className="text-subtle">Volume (24Hr)</div>
          <div className="text-bold">${priceFormatter(Number(coin.volumeUsd24Hr))}</div>
        </div>
        <div className="info-container">
          <div className="text-subtle">Change (24Hr)</div>
          <div
            className={`text-bold ${
              negativePrice(changePrice) ? "text-red-500" : "text-green-500"
            }`}
          >
            {changePrice}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
