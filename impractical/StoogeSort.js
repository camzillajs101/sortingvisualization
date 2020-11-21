function StoogeSort(array){
  function sort(array,lo,hi){
    if (array[lo] > array[hi]){
      let temp = array[lo];
      array[lo] = array[hi];
      array[hi] = temp;
      analytics.swaps++;
    }
    analytics.comparisons++;

    if (hi-lo+1 >= 3){
      let t = Math.floor((hi+1-lo)/3);
      sort(array,lo,hi-t);
      sort(array,lo+t,hi);
      sort(array,lo,hi-t);
    }
  }
  sort(array,0,array.length-1);
  return array;
}
