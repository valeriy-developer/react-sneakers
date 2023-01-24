export const computePrice = (items) => {
  const priceList = items.map((item) => +item.price);

  return priceList.reduce((a, b) => a + b, 0);
};
