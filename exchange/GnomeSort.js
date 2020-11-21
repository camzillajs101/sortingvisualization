function GnomeSort(array){
  let i = 0;
  while (i < array.length){
    if (array[i] >= array[i-1] || i === 0){
      i++;
    } else {
      let temp = array[i-1];
      array[i-1] = array[i];
      array[i] = temp;
      analytics.mainwrites+=2;
      analytics.swaps++;
      i--;
    }
    analytics.comparisons++;
  }
  return array;
}
