function BubbleSort(array){
  let sorted = false;
  while (!sorted){
    sorted = true;
    for (let i = 0; i < array.length-1; i++){
      if (array[i] > array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        analytics.swaps++;
        analytics.mainwrites+=2;
        sorted = false;
      }
      analytics.comparisons++;
    }
  }
  return array;
}
