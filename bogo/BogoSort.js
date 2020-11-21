function BogoSort(array){
  analytics.trials = 0;

  function checkSorted(array){
    for (let i = 0; i < array.length-2; i++){
    analytics.comparisons++;
      if (array[i] > array[i+1]){
        return false;
      }
    }
    return true;
  }

  while (!checkSorted(array)){
    for (let i = array.length-1; i > -1; i--){
      let random = Math.round(Math.random()*i);
      let temp = array[i];
      array[i] = array[random];
      array[random] = temp;
      analytics.swaps++;
      analytics.mainwrites+=2;
    }
    analytics.trials++;
  }
  return array;
}
