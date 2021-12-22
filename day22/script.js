export default function countDecorations(bigTree) {
 
  let sumDecorations = 0;
  for(let child in bigTree){
    if(typeof bigTree[child] === 'object' && bigTree[child] != null){
      sumDecorations += countDecorations(bigTree[child]);
    }else{
       sumDecorations += bigTree[child];
    }
  }
  return sumDecorations;
}
