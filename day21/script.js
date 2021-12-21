export default function canCarry(capacity, trip) {
  let packages = 0;
  for(let i = 0; i<trip.length; i++){
    if(trip[i - 1] != undefined && trip[i][1] === trip[i - 1][2]){
        packages -= trip[i-1][0];
    }
    packages += trip[i][0];
    if(packages > capacity){
      return false;      
    }
  }
  return true;
}
