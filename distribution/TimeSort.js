function TimeSort(array,delay){
  let temp = [];
  let index = 0;
  for (let i = 0; i < array.length; i++){
    temp.push(array[i]);
    setTimeout(() => {
      array[index++] = temp[i];
    },delay*temp[i]);
  }
}
