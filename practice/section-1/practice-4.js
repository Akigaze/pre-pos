'use strict';

function collectSameElements(collectionA, objectB) {
  //集合sames用于存储相同的字符
  var sames=new Array();
  //获取objectB的value属性值
  var item=objectB.value;
  for (var i = 0; i < collectionA.length; i++) {
    //获取collectionA中元素的key属性值
    var key=collectionA[i].key;
    for (var j = 0; j < item.length; j++) {
      //若元素相同，则将该元素存入sames集合，并跳出当前的内层循环，进行下一次外层循环
      if (key==item[j]) {
        sames.push(key);
        break;
      }
    }
  }
  return sames;
}
