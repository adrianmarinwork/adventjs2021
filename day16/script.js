export default function decodeNumber(symbols) {
 
  let symbolsDictionary = {
    '.' : 1,
    ',' : 5,
    ':' : 10,
    ';' : 50,
    '!' : 100
  }

  let sum = 0;
  for(let i = 0; i<symbols.length-1; i++){
    if(symbolsDictionary[symbols[i]] < symbolsDictionary[symbols[i+1]]){
      sum -= symbolsDictionary[symbols[i]];
    }
    else{
      sum += symbolsDictionary[symbols[i]];
    }
  }

  return sum + symbolsDictionary[symbols[symbols.length-1]];
}
