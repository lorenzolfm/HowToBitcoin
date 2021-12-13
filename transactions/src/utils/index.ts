export const toBitcoin = (satoshis: number): number => {
  return satoshis / (10 ** 8);
};
