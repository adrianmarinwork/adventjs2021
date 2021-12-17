export default function countPackages(carriers, carrierID) {
  let totalPackages = 0;
  for(let i = 0; i<carriers.length; i++){
    if(carriers[i][0] === carrierID){
      totalPackages += carriers[i][1];
      for(let j = 0; j<carriers[i][2].length; j++){
        totalPackages += countPackages(carriers.slice(i, carriers.length), carriers[i][2][j]);
      }
    }
  }
  return totalPackages;
}
