export default function shouldBuyFidelity(times) {
  let fidelityCardPrice = 250;
  for(let i = 1; i<=times; i++){
    fidelityCardPrice += (12 * Math.pow(0.75, i));
  }
  return (times*12) - fidelityCardPrice < 0 ? false : true;
}
