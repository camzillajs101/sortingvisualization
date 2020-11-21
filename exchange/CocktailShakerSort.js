function CocktailShakerSort(array){
  let left = 0;
  let right = array.length-1;

  let sorted = false;

  while (!sorted){
    sorted = true;
    for (let i = left; i < right; i++){
      if (array[i] > array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
        analytics.mainwrites+=2;
        analytics.swaps++;
      }
      analytics.comparisons++;
    }
    left++;

    for (let i = right; i > left-1; i--){
      if (array[i-1] > array[i]){
        let temp = array[i-1];
        array[i-1] = array[i];
        array[i] = temp;
        sorted = false;
        analytics.mainwrites+=2;
        analytics.swaps++;
      }
      analytics.comparisons++;
    }
    right--;
  }
  return array;
}
