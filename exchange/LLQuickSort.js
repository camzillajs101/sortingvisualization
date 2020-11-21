function LLQuickSort(array){ // Lomuto partition scheme
  analytics.recursions = 0;

  function swap(a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    analytics.mainwrites+=2;
    analytics.swaps++;
  }

  function partition(array,lo,hi){
    let pivot = array[hi];
    let i = lo-1;
    for (let j = lo; j < hi; j++){
      if (array[j] < pivot){
        i++;
        swap(i,j);
      }
      analytics.comparisons++;
    }
    swap(i+1,hi);
    return i+1;
  }

  function quickSort(array,lo,hi){
    if (lo < hi){
      analytics.recursions++;
      let p = partition(array,lo,hi);
      quickSort(array,lo,p-1);
      quickSort(array,p+1,hi);
    }
  }

  quickSort(array,0,array.length-1);
  return array;
}
