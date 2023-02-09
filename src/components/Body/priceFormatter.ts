// This function takes in large numbers and converts them to a human-friendly format with a "b" for billions and "m" for millions

const priceFormatter = (num: number): string => {
  let formattedMarketCap: string;

  if (num > 100_000_000_000) {
    const shortNumString = num.toString().slice(0, 5);
    formattedMarketCap = shortNumString.slice(0, 3).concat(".", shortNumString.slice(3), "b");
  } else if (num > 10_000_000_000) {
    const shortNumString = num.toString().slice(0, 4);
    formattedMarketCap = shortNumString.slice(0, 2).concat(".", shortNumString.slice(2), "b");
  } else if (num > 1_000_000_000) {
    const shortNumString = num.toString().slice(0, 3);
    formattedMarketCap = shortNumString.slice(0, 1).concat(".", shortNumString.slice(1), "b");
  } else if (num > 100_000_000) {
    const shortNumString = num.toString().slice(0, 5);
    formattedMarketCap = shortNumString.slice(0, 3).concat(".", shortNumString.slice(3), "m");
  } else if (num > 10_000_000) {
    const shortNumString = num.toString().slice(0, 4);
    formattedMarketCap = shortNumString.slice(0, 2).concat(".", shortNumString.slice(2), "m");
  } else if (num > 1_000_000) {
    const shortNumString = num.toString().slice(0, 3);
    formattedMarketCap = shortNumString.slice(0, 1).concat(".", shortNumString.slice(1), "m");
  } else if (num < 1) {
    formattedMarketCap = num.toFixed(20).match(/^-?\d*\.?0*\d{0,2}/)![0]; // If the token price is less than $1, display the first two non-zero decimal places
  } else {
    formattedMarketCap = num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return formattedMarketCap;
};

export default priceFormatter;
