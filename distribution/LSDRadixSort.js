function LSDRadixSort(array,base){
  let max = array[0];
  for (let i = 0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }
  let maxLog = Math.floor(Math.log(max) / Math.log(base)) + 1;

  let registers = [];
  for (let d = 0; d < maxLog; d++){
    for (let i = 0; i < base; i++){
      registers[i] = [];
    }
    for (let i = 0; i < array.length; i++){
      registers[Math.floor(array[i]/Math.pow(base,d))%base].push(array[i]);
      analytics.auxwrites++;
    }
    let index = 0;
    for (let i = 0; i < base; i++){
      for (let j = 0; j < registers[i].length; j++){
        array[index++] = registers[i][j];
        analytics.mainwrites++;
      }
    }
  }
  return array;
}

/* PROCEDURE:
1. Determine max log
2. For each digit from 0 to maxLog:
  1. Create one empty array in registers for every digit value in that base
  2. For each element in the array, add it to the corresponding register
  3. For each register:
    1. Rewrite the array with those values
*/
