export default function listGifts(letter) {
  let regalos = letter.trim().split(' ').filter((ele) => ele[0] != '_');
  let obj = {};
  for(let regalo of regalos){
    (obj[regalo] != undefined) ? obj[regalo]++ : obj[regalo] = 1;
  }
  return obj;
}
