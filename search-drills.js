
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

module.exports = {
  linearSearch
};