function OddEvenSort(array){
  let sorted = false;

  while (!sorted){
    sorted = true;

    for (let i = 1; i < array.length-1; i += 2){
      if (array[i] > array[i+1]){
        sorted = false;
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        analytics.mainwrites+=2;
        analytics.swaps++;
      }
      analytics.comparisons++;
    }

    for (let i = 0; i < array.length-1; i += 2){
      if (array[i] > array[i+1]){
        sorted = false;
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        analytics.mainwrites+=2;
        analytics.swaps++;
      }
      analytics.comparisons++;
    }
  }

  return array;
}
