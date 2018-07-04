'use strict';

function collectSameElements(collectionA, collectionB) {
  //集合sames用于存储相同的字符
  var sames=new Array();
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      //若元素相同，则将该元素存入sames集合，并跳出当前的内层循环，进行下一次外层循环
      if (collectionA[i]==collectionB[j]) {
        sames.push(collectionA[i]);
        break;
      }
    }
  }
  return sames;
}
