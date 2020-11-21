let shuffle = {
  random: length => {
    let array = shuffle.already(length);
    for (let i = 0; i < length; i++){
      let random = Math.floor(Math.random() * (length - i) + i);
      let temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
    return array;
  },
  already: length => {
    let output = [];
    for (let i = 0; i < length; i++){
      output.push(i);
    }
    return output;
  },
  reverse: length => {
    return shuffle.already(length).reverse();
  },
  pipeorgan: length => {
    let output = [];
    for (let i = 0; i < length/2; i++){
      output.push(i*2);
    }
    for (let i = Math.floor(length/2); i > 0; i--){
      output.push(i*2);
    }
    return output;
  },
  sine: length => {
    let output = [];
    for (let i = 0; i < length; i++){
      output.push(Math.floor((length-1)/2*Math.sin(2*Math.PI/(length-1)*i)+(length-1)/2));
    }
    return output;
  }
}
let complexities = {
  logn: (length) => { analytics.comparisons = Math.round(Math.log(length)) },
  n: (length) => { analytics.comparisons = length },
  nlogn: (length) => { analytics.comparisons = Math.round(length*Math.log(length)) },
  nsquared: (length) => { analytics.comparisons = Math.pow(length,2) }
}

// visualizing
function calculateColor(index){
  let r,g,b;
  if (index <= 1/6){
    r = 255;
    g = Math.round(1530*index);
    b = 0;
  } else if (index <= 2/6){
    r = Math.round(-1530*(index-1/6)+255);
    g = 255;
    b = 0;
  } else if (index <= 3/6){
    r = 0;
    g = 255;
    b = Math.round(1530*(index-2/6));
  } else if (index <= 4/6){
    r = 0;
    g = Math.round(-1530*(index-3/6)+255);
    b = 255;
  } else if (index <= 5/6){
    r = Math.round(1530*(index-4/6));
    g = 0;
    b = 255;
  } else if (index <= 6/6){
    r = 255;
    g = 0;
    b = Math.round(-1530*(index-5/6)+255);
  }
  return [r,g,b];
}
function initBars(array,color,vw,vh){
  if (color){
    $('#bars-container').html("");
    for (let i = 0; i < array.length; i++){
      $('#bars-container').append(`<div class="bars" style="width:${100/array.length}%;height:${100*(array[i]+1)/array.length}%;background-color:hsl(${((array[i])/array.length)*360},100%,50%)"></div>`);
    }
  } else {
    $('#bars-container').html("");
    for (let i = 0; i < array.length; i++){
      $('#bars-container').append(`<div class="bars" style="width:${100/array.length}%;height:${100*(array[i]+1)/array.length}%"></div>`);
    }
  }
}
function writeBars(array,color){
  if (array.length === $('.bars').length){
    if (color){
      for (let i = 0; i < array.length; i++){
        $(`.bars:nth-child(${i+1})`).css({
          "height": 100*(array[i]+1)/array.length+"%",
          "width": 100/array.length+"%",
          "background-color": `hsl(${(array[i]/array.length)*360},100%,50%)`
        });
      }
    } else {
      for (let i = 0; i < array.length; i++){
        $(`.bars:nth-child(${i+1})`).css({
          "height": 100*(array[i]+1)/array.length+"%",
          "width": 100/array.length+"%"
        });
      }
    }
  } else {
    initBars(array,color);
  }
}
function writeNthBar(n,h){
  $(`.bars:nth-child(${n+1})`).css("height",100*(h+1)/$('.bars').length+"%");
}
const colors = ["yellow","magenta","orange","pink","blue","green","purple"];
function writeBarsHeap(array){
  for (let d = 0; d <= Math.floor(Math.log2(array.length))+1; d++){
    let i = 0;
    while (i < Math.pow(2,d)){
      $(`.bars:nth-child(${i+Math.pow(2,d)})`).css({
        "height": 100*(array[i+Math.pow(2,d)-1]+1)/array.length+"%",
        "width": 100/array.length+"%",
        "background-color": colors[d]
      });
      i++;
    }
  }
}
function sleep(milliseconds,n,h) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
