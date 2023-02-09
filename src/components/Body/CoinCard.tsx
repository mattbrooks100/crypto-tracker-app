import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import { CoinCardProps } from "../../interfaces";

const CoinCard = ({ coin }: CoinCardProps) => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  // Token price in human-friendly format
  const formattedPrice = Number(coin.priceUsd).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Market cap in human-friendly format
  const formattedMarketCap = (num: number): string => {
    let formattedMarketCap: string;

    if (num > 100_000_000_000) {
      const shortNumString = num.toString().slice(0, 5);
      formattedMarketCap = shortNumString.slice(0, 3).concat(".", shortNumString.slice(3), " b");
    } else if (num > 10_000_000_000) {
      const shortNumString = num.toString().slice(0, 4);
      formattedMarketCap = shortNumString.slice(0, 2).concat(".", shortNumString.slice(2), " b");
    } else if (num > 1_000_000_000) {
      const shortNumString = num.toString().slice(0, 3);
      formattedMarketCap = shortNumString.slice(0, 1).concat(".", shortNumString.slice(1), " b");
    } else if (num > 100_000_000) {
      const shortNumString = num.toString().slice(0, 5);
      formattedMarketCap = shortNumString.slice(0, 3).concat(".", shortNumString.slice(3), " m");
    } else if (num > 10_000_000) {
      const shortNumString = num.toString().slice(0, 4);
      formattedMarketCap = shortNumString.slice(0, 2).concat(".", shortNumString.slice(2), " m");
    } else if (num > 1_000_000) {
      const shortNumString = num.toString().slice(0, 3);
      formattedMarketCap = shortNumString.slice(0, 1).concat(".", shortNumString.slice(1), " m");
    } else {
      formattedMarketCap = num.toLocaleString();
    }
    return formattedMarketCap;
  };

  return (
    <div className="card flex flex-col justify-center items-center h-80 w-80 bg-white m-4 rounded-lg drop-shadow-xl">
      <div className="">
        {coin.name} - {coin.symbol}
      </div>
      <div className="">${formattedPrice}</div>
      <div className="">${formattedMarketCap(Number(coin.marketCapUsd))}</div>
    </div>
  );
};

export default CoinCard;
