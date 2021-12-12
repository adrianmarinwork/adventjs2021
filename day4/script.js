export default function createXmasTree(height) {
  
    let tree = '', cnt = 1;
    for(let i = 0; i<height; i++){
      tree += ('_'.repeat(height - (i + 1)) + '*'.repeat(cnt) + '_'.repeat(height - (i + 1)) + '\n')
      cnt += 2;
    }
    for(let i = 0; i<2; i++){
        tree += ('_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n');
    }
    return tree.substring(0, tree.length-1);

}
