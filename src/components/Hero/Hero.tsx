import Typed from "react-typed";
import CryptoIcons from "../../assets/crypto_icons.png";
import HeroCrypto from "../../assets/hero_crypto.jpeg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center text-center w-full max-w-screen-xl text-3xl gap-16 px-8">
        <div className="hero-text mt-16 sm:mt-0 max-w-[400px]">
          <p>Your source for the latest market data on</p>
          <div className="mt-4 text-5xl font-bold tracking-wide text-secondary">
            <Typed
              strings={["Bitcoin", "Ethereum", "Cardano", "Solana", "Tether"]}
              typeSpeed={50}
              backSpeed={70}
              backDelay={2000}
              loop
            />
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroCrypto} className="w-[480px]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
