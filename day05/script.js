export default function daysToXmas(date) {
  let resta = new Date('Dec 25, 2021').getTime() - new Date(date.toDateString()).getTime();
  return parseInt(resta / (1000 * 60 * 60 * 24));
}
