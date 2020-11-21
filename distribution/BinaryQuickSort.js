function BinaryQuickSort(array){ // recursive
  let max = array[0];
  for (i in array){
    if (array[i] > max){
      max = array[i];
    }
  }
  let maxLog = Math.floor(Math.log2(max));

  function partition(array,lo,hi,d){
    let left = lo;
    let right = hi+1;
    while (left < right){
      let bit = Math.floor(array[left]/Math.pow(2,d))%2;
      if (bit == 1){
        let temp = array[right-1];
        array[right-1] = array[left];
        array[left] = temp;
        analytics.swaps++;
        analytics.mainwrites+=2;
        right--;
      } else {
        left++;
      }
    }
    return right-1;
  }

  function binaryQuick(array,lo,hi,bit){
    if (lo < hi && bit >= 0){
      let p = partition(array,lo,hi,bit);
      binaryQuick(array,lo,p,bit-1);
      binaryQuick(array,p+1,hi,bit-1);
    }
  }
  binaryQuick(array,0,array.length-1,maxLog);
  return array;
}


/* PROCEDURE:
1. Determine max log
2. Create partition function (array, low, high, bit to sort):
  1. Initialize left and right bin boundaries as lo and hi+1
  2. As long as left and right have not met yet:
    1. Examine bit of left index
    2. If the bit is a 1:
      1. Swap left with first before right boundary (right-1)
      2. Decrement right boundary
    3. If the bit is a 0:
      1. Increment left boundary
  3. Return the partition index
3. Create recursive sort function:
  1. If array size is valid (lo < hi) AND we're at the zero bit or greater:
    1. Partition array and initialize p as partition index
    2. Binary quick sort first half (lo to p) using next lower bit
    3. Binary quick sort second half (p+1 to hi) using next lower bit
4. Run sort from 0 to end of array using maxLog (MSD)
*/
