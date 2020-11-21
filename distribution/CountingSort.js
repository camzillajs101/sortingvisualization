function CountingSort(array){
  let max = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }

  let counts = new Array(max+1).fill(0);

  for (let i = 0; i < array.length; i++){
    counts[array[i]]++;
    analytics.auxwrites++;
  }

  for (let i = 1; i < counts.length; i++){
    counts[i] += counts[i-1];
    analytics.auxwrites++;
  }

  let output = [];
  for (let i = array.length-1; i >= 0; i--){
    output[--counts[array[i]]] = array[i];
    analytics.auxwrites++;
  }

  for (let i = 0; i < output.length; i++){
    array[i] = output[i];
    analytics.mainwrites++;
  }

  return array;
}


/* PROCEDURE:
1. Determine max
2. Create a counter in counts array for each possible value from 0 to max (inclusive)
3. For each element in the array, increment the corresponding counter
4. For each index in counts, add to it the previous count
5. For each item in the array (backwards for stability), write the value to the index indicated by counts in output
6. Rewrite array with output
*/
