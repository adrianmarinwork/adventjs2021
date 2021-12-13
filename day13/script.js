export default function wrapGifts(gifts) {
  if(gifts.length === 0) return gifts;

  gifts = gifts.map(gift => gift = ('*' + gift + '*'));
  gifts.unshift('*'.repeat(gifts[0].length));
  gifts.push('*'.repeat(gifts[0].length));

  return gifts;
}
