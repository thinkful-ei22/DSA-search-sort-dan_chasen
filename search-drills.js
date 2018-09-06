const BinarySearchTree = require('./bst');

function linearSearch(array, value){
  let count = 0;
  for(let i = 0; i < array.length; i++){
    count++;
    if(array[i]===value){
      return `index: ${i}, count: ${count}`;
    }
  }
  return `item not found, count: ${count}`;
}

console.log(linearSearch([1, 2, 3], 2));


let bst = new BinarySearchTree();

function main(){
  bst.insert(25);
  bst.insert(15);
  bst.insert(50);
  bst.insert(10);
  bst.insert(24);
  bst.insert(35);
  bst.insert(70);
  bst.insert(4);
  bst.insert(12);
  bst.insert(18);
  bst.insert(31);
  bst.insert(44);
  bst.insert(66);
  bst.insert(90);
  bst.insert(22);

  //console.log(bst);
  // bst.inOrderTraversal();
  // bst.preOrderTraversal();
  bst.postOrderTraversal();
}

main();