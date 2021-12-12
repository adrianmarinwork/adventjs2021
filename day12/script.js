export default function getMinJump(obstacles) {
  for(let i = 1; i<=Math.max(...obstacles); i++){
    for(let j = i; j<=Math.max(...obstacles); j += i){
      if(obstacles.includes(j)){
        break;
      }
      if(j + i > Math.max(...obstacles)){
        return i;
      }
    }
  }
}
