module.exports = function transform(arr) {

  let transformedArr = [];  

  function discardNext(arr) {
  let num = arr.indexOf('--discard-next'); 
    if (num == (arr.length - 1)) {
      arr.splice(num, 1);
    } else {
    arr.splice(num, 2);    
  }
}
  
  function discardPrev(arr) {
  let num = arr.indexOf('--discard-prev');   
    if (num == 0) {
      arr.splice(num, 1);
    } else {
      arr.splice(num - 1, 2);
    }  
}
  
  function doubleNext(arr) {
  let num = arr.indexOf('--double-next');  
    if (num == (arr.length - 1)) {
      arr.splice(num, 1);
    } else {
    arr.splice(num, 1, arr[num + 1]);
  }
}

  function doublePrev(arr) {
  let num = arr.indexOf('--double-prev');  
    if (num == 0) {
      arr.splice(num, 1);
    } else {
      arr.splice(num, 1, arr[num - 1]);
    } 
}

while (arr.includes('--double-prev')) {
  doublePrev(arr);
}

while (arr.includes('--discard-next')) {
  discardNext(arr);
}

while (arr.includes('--double-next')) {
  doubleNext(arr);
}

while (arr.includes('--discard-prev')) {
  discardPrev(arr);
}
  
transformedArr = arr;

return transformedArr;

}

