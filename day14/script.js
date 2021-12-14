export default function missingReindeer(ids) {
  return (ids.length*(ids.length+1))/2 - ids.reduce((sum, ele) => sum + ele, 0)
}
