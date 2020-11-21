function ShellSort(array){
  let shrink = 2;

  for (let gap = array.length/2; gap >= 1; gap = Math.floor(gap/shrink)){
    console.log("gap:",gap);
    for (let i = gap; i < array.length; i++){
      console.log(i);
      let key = array[i];
      let j = i-gap;
      while (j >= 0 && array[j] > key){
        analytics.comparisons++;
        array[j+gap] = array[j];
        analytics.mainwrites++;
        j -= gap;
      }
      analytics.comparisons++;
      array[j+gap] = key;
      analytics.mainwrites++;
    }
  }

  return array;
}
