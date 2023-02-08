import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-60">
      <div className="flex flex-col items-center text-center text-3xl px-4">
        <p>Your source for the latest market data on</p>
        <div className="text-4xl font-bold tracking-wide text-secondary">
          <Typed
            strings={["Bitcoin", "Ethereum", "Cardano", "Solana", "Over 1,000 Cryptocurrencies"]}
            typeSpeed={50}
            backSpeed={70}
            backDelay={2000}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
