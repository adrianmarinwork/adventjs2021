export default function contains(store, product) {
  let encontrado = false;
  for(let ele in store){
    if(typeof store[ele] === 'object'){
      if(!encontrado){
        encontrado = contains(store[ele], product);
      }
    }else{
      if(store[ele] === product){
        encontrado = true;
      }
    }
  }
  return encontrado;
}
