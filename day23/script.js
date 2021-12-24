export default function canReconfigure(from, to) {
 
  if(from.length != to.length) return false;

  let dictionary = {};

  for(let i = 0; i<from.length; i++){
    if(dictionary[from[i]] != undefined && dictionary[from[i]] != to[i]) return false;
    let key = Object.keys(dictionary).find(key => dictionary[key] === to[i]);
    if(key != undefined && key != from[i]) return false;
    dictionary[from[i]] = to[i];
  }

  return true;
}
