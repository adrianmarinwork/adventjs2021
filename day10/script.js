export default function getCoins(change) {
  let coins = [1, 2, 5, 10, 20, 50];
  let coinsToReturn = [0, 0, 0, 0, 0, 0];

  let i = coins.length - 1;
  while(i >= 0){
    if(change == 0){
      break;
    }
    if(change - coins[i] >= 0){
      change -= coins[i];
      coinsToReturn[i]++;
    }
    if(change < coins[i]){
      i--;
    } 
  }
  return coinsToReturn;
}
