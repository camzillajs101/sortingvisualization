function MergeSort(array){
  function merge(array,lo,mid,hi){
    let a = lo, b = mid+1;
    let temp = [];

    while (a <= mid && b <= hi){
      if (array[b] < array[a]){
        temp.push(array[b++]);
        analytics.auxwrites++;
      } else {
        temp.push(array[a++]);
        analytics.auxwrites++;
      }
      analytics.comparisons++;
    }

    while (a <= mid){
      temp.push(array[a++]);
      analytics.auxwrites++;
    }
    while (b <= hi){
      temp.push(array[b++]);
      analytics.auxwrites++;
    }

    for (let i = lo; i <= hi; i++){
      array[i] = temp[i-lo];
      analytics.mainwrites++;
    }
  }

  function recursiveMerge(array,lo,hi){
    if (lo < hi){
      let mid = Math.floor((hi+lo)/2);

      recursiveMerge(array,lo,mid);
      recursiveMerge(array,mid+1,hi);

      merge(array,lo,mid,hi);
    }
  }

  recursiveMerge(array,0,array.length-1);
  return array;
}
