import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import { CoinCardProps } from "../../interfaces";
import priceFormatter from "./priceFormatter";
import negativePrice from "./negativePrice";

const CoinCard = ({ coin }: CoinCardProps) => {
  const [coinData, setCoinData] = useRecoilState(coinState);
  const changePrice = priceFormatter(Number(coin.changePercent24Hr));

  return (
    <div className="card relative flex flex-col justify-center items-center h-80 w-80 bg-white m-4 rounded-lg drop-shadow-xl">
      <div className="absolute flex -top-2 -left-2 bg-white drop-shadow rounded-full h-12 w-12 justify-center items-center text-xl">
        {coin.rank}
      </div>
      <div className="mb-4">
        <img src={`/assets/icon/${coin.symbol.toLowerCase()}.svg`} alt="token icon" width={50} />
      </div>
      <div className="flex w-full justify-center items-center gap-4 font-semibold text-xl tracking-wide mb-4 mx-4">
        {coin.name} - {coin.symbol}
      </div>
      <div className="card-info-container grid items-center w-full px-8 gap-2">
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
