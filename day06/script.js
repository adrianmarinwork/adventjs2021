export default function sumPairs(numbers, result) {
  
    let combination = [];
    for(let i = 0; i<numbers.length; i++){
      combination[combination.length] = numbers[i];
      for(let j = i+1; j<numbers.length; j++){
        if(numbers[i] + numbers[j] === result){
          combination[combination.length] = numbers[j];
          break;
        }
      }
      if(combination.length === 2){
        break;
      }
      combination = [];
    }
    return combination.length === 0 ? null : combination;
}
