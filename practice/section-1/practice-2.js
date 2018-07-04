'use strict';

function collectSameElements(collectionA, collectionB) {
  //alert(collectionB.length);
  //集合sames用于存储相同的字符
  var sames=new Array();
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      //获取collectionB的每一个子集，并进行遍历
      var item=collectionB[j];
      for (var k = 0; k < item.length; k++) {
        if (collectionA[i]==item[k]) {
          sames.push(collectionA[i]);
          break;
        }
      }
    }
  }
  return sames;
}
