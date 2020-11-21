function LRQuickSort(array){ // Hoare partition scheme
  function partition(array,lo,hi){
    let pivot = array[Math.floor((hi+lo)/2)];

    let i = lo, j = hi;
    while (true){
      while (array[i] < pivot){
        i++;
        analytics.comparisons++;
      }
      while (array[j] > pivot){
        j--;
        analytics.comparisons++;
      }
      analytics.comparisons += 2;
      if (i >= j){
        return j;
      }
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      analytics.mainwrites+=2;
      analytics.swaps++;
    }
  }

  function quickSort(array,lo,hi){
    if (lo < hi){
      let p = partition(array,lo,hi);
      quickSort(array,lo,p);
      quickSort(array,p+1,hi);
    }
  }

  quickSort(array,0,array.length-1);
  return array;
}
