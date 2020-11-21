function StableQuickSort(array){
  function partition(array,lo,hi){
    let registers = [[],[]];
    let pivot = array[lo];
    for (let i = lo+1; i < hi+1; i++){
      if (array[i] <= pivot){
        registers[0].push(array[i]);
        analytics.auxwrites++;
      } else {
        registers[1].push(array[i]);
        analytics.auxwrites++;
      }
      analytics.comparisons++;
    }

    let index = lo;
    for (i in registers[0]){
      array[index++] = registers[0][i];
      analytics.mainwrites++;
    }
    array[index] = pivot;
    analytics.mainwrites++;
    let p = index++;
    for (i in registers[1]){
      array[index++] = registers[1][i];
      analytics.mainwrites++;
    }

    return p;
  }
  function quickSort(array,lo,hi){
    if (lo < hi){
      let p = partition(array,lo,hi);
      quickSort(array,lo,p-1);
      quickSort(array,p+1,hi);
    }
    analytics.comparisons++;
  }
  quickSort(array,0,array.length-1);
  return array;
}
