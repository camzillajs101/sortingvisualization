function CombBogoSort(array){ // after # of swaps > 50n, switch to bubble bogo
  function checkSorted(array){
    for (let i = 0; i < array.length-1; i++){
      analytics.comparisons++;
      if (array[i] > array[i+1]){
        return false;
      }
    }
    return true;
  }

  let swaps = 0;
  let n = array.length;
  while (!checkSorted(array)){
    let a, b;
    if (swaps < 50*n){ // exchange bogo
      a = Math.round(Math.random()*(n-1));
      b = Math.round(Math.random()*(n-1));

      if (b < a){
        let temp = a;
        a = b;
        b = temp;
      }
      swaps++;
      analytics.comparisons++;
    } else { // bubble bogo
      a = Math.round(Math.random()*(n-2));
      b = a+1;
    }
    if (array[a] > array[b]){
      let temp = array[a];
      array[a] = array[b];
      array[b] = temp;
      analytics.swaps++;
      analytics.mainwrites+=2;
    }
    analytics.comparisons++;
  }
  return array;
}
