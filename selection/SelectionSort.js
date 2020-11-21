function SelectionSort(array){
  for (let i = 0; i < array.length; i++){
    let least = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[least]){
        least = j;
      }
      analytics.comparisons++;
    }
    let temp = array[i];
    array[i] = array[least];
    array[least] = temp;
    analytics.swaps++;
    analytics.mainwrites+=2;
  }
  return array;
}
