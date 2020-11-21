function MaxHeapSort(array){
  function siftDown(array,index,size){
    let greatest = index;
    let l = 2*index+1;
    let r = 2*index+2;

    if (l < size && array[l] > array[greatest]){
      greatest = l;
    }
    if (r < size && array[r] > array[greatest]){
      greatest = r;
    }
    analytics.comparisons += 2;

    if (greatest !== index){
      let temp = array[index];
      array[index] = array[greatest];
      array[greatest] = temp;
      analytics.swaps++;
      analytics.mainwrites+=2;
      siftDown(array,greatest,size);
    }
  }

  for (let i = Math.floor(array.length/2)-1; i >= 0; i--){
    siftDown(array,i,array.length);
  }

  for (let i = array.length-1; i > 0; i--){
    let temp = array[i];
    array[i] = array[0];
    array[0] = temp;
    analytics.swaps++;
    analytics.mainwrites+=2;
    siftDown(array,0,i);
  }

  return array;
}

/* PROCEDURE:

identify index of last item with children: n/2-1
run i from n/2-1 to 0 (inclusive); siftDown i each time

run i from n-1 to 0 (exclusive); siftDown 0 (root) to i (boundary of heap) each time

siftDown:
index of left child: 2*i+1
index of right child: 2*i+2

if left child > root then left child is new largest
if right child > root then right child is new largest
(above assuming l and r are less than size; to prevent sifting down into sorted section)

if either one of the root's children are greater than it then swap with the greater and siftDown on subtree: root is greatest
*/
