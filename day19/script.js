export default function learn(time, courses) {
 
  let solution = {};

  for(let i = 0; i<courses.length; i++){
    for(let j = i + 1; j<courses.length; j++){
      if(courses[i] + courses[j] <= time){
        if(courses[i] + courses[j] === time){
          return [i, j];
        }
        solution[courses[i] + courses[j]] = [i, j];
      }
    }
  }

  return Object.keys(solution).length === 0 ? null : solution[Object.keys(solution)[Object.keys(solution).length - 1]];

}
