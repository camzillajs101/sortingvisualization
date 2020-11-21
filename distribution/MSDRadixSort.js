function MSDRadixSort(array,base){
  let max = array[0];
  for (i in array){
    if (array[i] > max){
      max = array[i];
    }
  }
  let d = Math.floor(Math.log(max) / Math.log(base));

  function radixMSD(array,lo,hi,digit){
    if (lo >= hi || digit < 0){
      return;
    }

    let registers = [];
    for (let i = 0; i < base; i++){
      registers.push([]);
    }
    for (let i = lo; i < hi; i++){
      registers[Math.floor(array[i]/Math.pow(base,digit))%base].push(array[i]);
      analytics.auxwrites++;
    }
    let index = lo;
    for (let i = 0; i < base; i++){
      for (let j = 0; j < registers[i].length; j++){
        array[index++] = registers[i][j];
        analytics.mainwrites++;
      }
    }

    let sum = lo;
    for (let i = 0; i < base; i++){
      radixMSD(array,sum,sum+registers[i].length,digit-1);
      sum += registers[i].length;
    }
  }

  radixMSD(array,0,array.length,d);

  return array;
}
