function InsertionSort(array,lo,hi){
  if (lo == undefined || hi == undefined){
    lo = 0;
    hi = array.length;
  }
  for (let i = lo+1; i < hi; i++){
    let key = array[i];
    let j = i-1;
    while (j >= lo && array[j] > key){
      analytics.comparisons++;
      array[j+1] = array[j];
      analytics.mainwrites++;
      j--;
    }
    array[j+1] = key;
    analytics.mainwrites++;
  }
  return array;
}
