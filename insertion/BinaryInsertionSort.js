function BinaryInsertionSort(array){
  for (let i = 1; i < array.length; i++){
    let key = array[i];
    let lo = 0, hi = i;
    while (lo < hi){
      let mid = Math.floor((hi+lo)/2);
      if (key < array[mid]){
        hi = mid;
      } else {
        lo = mid+1;
      }
      analytics.comparisons++;
    }

    let j = i-1;
    while (j >= lo){
      array[j+1] = array[j];
      analytics.mainwrites++;
      j--;
    }
    array[j+1] = key;
    analytics.mainwrites++;
  }
  return array;
}
