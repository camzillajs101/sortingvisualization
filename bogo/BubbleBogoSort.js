function BubbleBogoSort(array){
  function checkSorted(array){
    sorted = true;
    for (let i = 0; i < array.length-2; i++){
      analytics.comparisons++;
      if (array[i] > array[i+1]){
        return false;
      }
    }
    return true;
  }

  while (!checkSorted(array)){
    let a = Math.round(Math.random()*(array.length-2));
    let b = a+1;

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
