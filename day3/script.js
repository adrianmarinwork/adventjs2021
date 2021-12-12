export default function isValid(letter) {
  
  let indexLastParenthesis = letter.lastIndexOf(')');
  letter = letter.substring(letter.indexOf('('), ((indexLastParenthesis === -1) ? letter.length : indexLastParenthesis+1));
  
  let cnt = 0;
  for(let letra of letter){
    if(letra == '(') cnt++;
    if(letra == ')') cnt--; 
  }

  if(cnt != 0 || 
  letter.includes('[') || 
  letter.includes('{') || 
  letter.search(/[^()]/g) === -1) return false;
  
  return true;
}
