function CombSort(array){
  let shrink = 1.3;
  let gap = array.length;
  let sorted = false;

  while (!sorted || gap !== 1){
    sorted = true;
    gap = Math.floor(gap/shrink);
    if (gap < 1){
      gap = 1;
    }

    for (let i = 0; i < array.length-gap; i++){
      if (array[i] > array[i+gap]){
        let temp = array[i];
        array[i] = array[i+gap];
        array[i+gap] = temp;
        sorted = false;
        analytics.mainwrites+=2;
        analytics.swaps++;
      }
      analytics.comparisons++;
    }
  }

  return array;
}
