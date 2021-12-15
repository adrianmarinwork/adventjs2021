export default function checkSledJump(heights) {

  let arriba = true;
  for(let i = 0; i<heights.length - 1; i++){
    if(arriba && heights[i] < heights[i+1]){
      continue;
    }
    else if(heights[i] > heights[i+1]){
      arriba = false;
      continue;
    }
    return false;
  }

  return arriba ? false : true;
}
