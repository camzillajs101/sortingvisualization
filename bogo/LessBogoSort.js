function LessBogoSort(array){
  let min = 0;
  function isMinSorted(array,min){
    for (let i = min+1; i < array.length; i++){
      analytics.comparisons++;
      if (array[i] < array[min]){
        return false;
      }
    }
    return true;
  }

  while (min < array.length-1){
    while (!isMinSorted(array,min)){
      for (let i = min; i < array.length; i++){
        let random = Math.floor(Math.random() * (array.length - i) + i);
        let temp = array[i];
        array[i] = array[random];
        array[random] = temp;
        analytics.swaps++;
        analytics.mainwrites+=2;
      }
    }
    min++;
  }
  return array;
}
