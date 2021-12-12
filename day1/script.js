export default function contarOvejas(ovejas) {
  let solution = [];
  for(let oveja of ovejas){
    if(oveja.color === 'rojo' && oveja.name.search(/a/gi) != -1 && oveja.name.search(/n/gi) != -1 ){
      solution.push(oveja);
    }
  }
  return solution;
}
