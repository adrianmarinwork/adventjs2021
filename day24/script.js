export default function checkIsSameTree(treeA, treeB) {
  return treeA != null && treeB != null ? 
    treeA.value === treeB.value && checkIsSameTree(treeA.left, treeB.left) 
    && checkIsSameTree(treeA.right, treeB.right) : true;
}
