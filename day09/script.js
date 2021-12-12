export default function groupBy(collection, it) {
  let obj = {};
  for(let ele of collection){
    if(obj[ (typeof it === 'function') ? it(ele) : ele[it] ] === undefined){
      obj[ (typeof it === 'function') ? it(ele) : ele[it] ] = [];
    }
    obj[ (typeof it === 'function') ? it(ele) : ele[it] ].push(ele);
  }
  return obj;
}
