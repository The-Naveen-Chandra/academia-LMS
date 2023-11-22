export const formatPrice = (price: number) => {
  // for indian currency
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};
