'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=countSameElements(collectionA);
  console.log(collectionC);
  for (var ele of objectB.value) {
    for (var obj of collectionC) {
      if (ele===obj.key) {
        obj.count-=Math.floor(obj.count/3);
        break;
      }
    }
  }
  return collectionC;
}
//对集合中的元素进行统计
function countSameElements(collection) {
  var elements=new Array();
  var diffIndex=collection.length;
  var diff=false;
  for (var i = 0; i < collection.length; i++) {
    var obj={key:"",count:1};
    obj.key=collection[i];
    for (var j = i+1; j < collection.length; j++) {
      if (obj.key===collection[j]) {
        obj.count++;
        continue;
      }
      if (!diff) {
        diff=true;
        diffIndex=j;
      }
    }
    i=diffIndex-1;
    elements.push(obj);
    diffIndex=collection.length;
    diff=false;
  }
  return elements;
}
