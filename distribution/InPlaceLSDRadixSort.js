function InPlaceLSDRadixSort(array,base){
  let max = array[0];
  for (i in array){
    if (array[i] > max){
      max = array[i];
    }
  }
  let maxLog = Math.floor(Math.log(max) / Math.log(base)) + 1;

  for (let d = 0; d < maxLog; d++){
    let bins = [];
    for (let i = 0; i < base-1; i++){
      bins[i] = array.length-1;
      analytics.auxwrites++;
    }

    let pos = 0;
    for (let i = 0; i < array.length; i++){
      let digit = Math.floor(array[pos]/Math.pow(base,d))%base;

      if (digit === 0){
        pos++;
      } else {
        for (let j = pos; j < bins[digit-1]; j++){
          let temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
          analytics.swaps++;
          analytics.mainwrites+=2;
        }
        for (let j = digit-1; j > 0; j--){
          bins[j-1]--;
          analytics.auxwrites++;
        }
      }
    }
  }

  return array;
}


/* PROCEDURE:
1. Determine max log
2. Run through digits from 0 to max log, exclusive
  1. Initialize bins, stores boundaries of digit bins; positions are initialized as array.length-1 (last index)
  2. Initialize pos at 0, stores right boundary of zero bin (not in bins array)
  3. Run through all values of array (NOTE: i is not used! This for loop only exists to run array.length times.)
    (IMPORTANT! Get digit of value with index *pos*, not i.)
    1. If digit is zero, we don't need to move it, increment pos.
    2. Else run from pos (zeros boundary) to left boundary corresponding to that digit. (index is digit-1 because zero boundary is not stored)
      1. Swap j, j+1
    3. Decrement all boundaries
*/
