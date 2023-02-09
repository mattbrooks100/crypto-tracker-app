const negativePrice = (price: string): boolean => {
  let result: boolean;
  if (Number(price) < 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export default negativePrice;
