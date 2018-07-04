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
//将形如 “d-5” 的字符串拆解成如 “{key:d,count:5}” 的对象
function getElementAndNum(str){
  var element=str.substr(0,1);
  var num=parseInt(str.substr(2));
  var item={key:element,count:num};
  return item;
}
//对集合中的元素进行统计
function countSameElements(collection) {
  var elements=new Array();
  var diffIndex=collection.length;
  var diff=false;
  for (var i = 0; i < collection.length; i++) {
    var obj={key:"",count:1};
    if (collection[i].length!==1) {
      obj=getElementAndNum(collection[i]);
    }else {
      obj.key=collection[i];
    }
    for (var j = i+1; j < collection.length; j++) {
      if (obj.key===collection[j]) {
        obj.count++;
        continue;
      }
      if (collection[j].length!==1) {
        var temp=getElementAndNum(collection[j]);
        if (temp.key===obj.key) {
          obj.count+=temp.count;
          continue;
        }
      }
      if (!diff) {
        diff=true;
        diffIndex=j;
      }
    }
    i=diffIndex-1;
    elements.push(obj);
    diff=false;
    diffIndex=collection.length;
  }
  return elements;
}
