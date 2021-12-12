export default function maxProfit(prices) {
  let allBenefits = [];
  for(let i = 0; i<prices.length; i++){
    for(let j = i + 1; j<prices.length; j++){
      allBenefits[allBenefits.length] = prices[j] - prices[i];
    }
  }
  let maxNumber = Math.max(...allBenefits);
  return maxNumber > 0 ? maxNumber : -1;
}
