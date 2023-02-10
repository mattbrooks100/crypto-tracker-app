import { useRecoilState } from "recoil";
import coinState from "../../coinState";
import CoinCard from "./CoinCard";
import * as iconManifest from "../../../node_modules/cryptocurrency-icons/manifest.json";
import { IconArrayItemProps } from "../../interfaces";
import { CoinProps } from "../../interfaces";

const Body = () => {
  const [coinData, setCoinData] = useRecoilState(coinState);

  // Symbol array is an array of all the cryptocurrency symbols available as icons in the cryptocurrency-icons library
  // If the current coin's symbol is found in the icon library, use that coin's icon
  // If the current coin's symbol is not found in the icon library, use a generic icon
  const iconArray = iconManifest.default;
  const symbolArray = iconArray.map((item: IconArrayItemProps) => item.symbol);

  return (
    <div className="w-full bg-gray-100 text-black flex justify-center">
      <div className="body flex flex-wrap justify-center max-w-screen-xl">
        {coinData.map((coin: CoinProps, i: number) =>
          symbolArray.includes(coin.symbol) ? (
            <CoinCard key={i} coin={coin} icon={true} />
          ) : (
            <CoinCard key={i} coin={coin} icon={false} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
