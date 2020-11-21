function DoubleSelectionSort(array){
  function swap(a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    analytics.swaps++;
    analytics.mainwrites+=2;
  }

  for (let i = 0; i < array.length/2; i++){
    let least = i, greatest = i;
    for (let j = i+1; j < array.length-i; j++){
      if (array[j] < array[least]){
        least = j;
      }
      if (array[j] > array[greatest]){ // -saving on comparisons?-
        greatest = j;
      }
      analytics.comparisons += 2;
    }
    if (greatest === i){
      greatest = least;
    }
    swap(least,i);
    swap(greatest,array.length-(i+1));
  }
  return array;
}
