'use strict';

function getElementAndNum(str){
  var element=str.substr(0,1);
  var num=str.substr(2);
  if (str.substr(1,1)==='[') {
    num=str.slice(2,str.length-1);
  }
  num=parseInt(num);
  var item={name:element,summary:num};
  return item;
}
function countSameElements(collection) {
  //存放结果的集合
  var elements=new Array();
  //记录第一个与当前字符不同的字符的位置，作为下一个比较的字符
  var diffIndex=collection.length;
  //是否已存在与当前字符不同的字符，默认为false,即默认所有字符都一样
  var diff=false;
  //按顺序取一个字符与其后续额的所有字符进行比较
  for (var i = 0; i < collection.length; i++) {
    var obj={name:"",summary:1};
    //若用于比较的元素存在特殊格式，则要先进行处理
    if (collection[i].length!==1) {
      obj=getElementAndNum(collection[i]);
    }else {
      obj.name=collection[i];
    }
    for (var j = i+1; j < collection.length; j++) {
      //一、两个字符串相同
      if (obj.name===collection[j]) {
        obj.summary++;
        continue;
      }
      //二、后面的字符串有特殊格式，但主要的字符与前面的是一样的
      if (collection[j].length!==1) {
        var temp=getElementAndNum(collection[j]);
        if (temp.name===obj.name) {
          obj.summary+=temp.summary;
          continue;
        }
      }
      //三、主要字符不一样，直接记录位置
      if (!diff) {
        diff=true;
        diffIndex=j;
      }
    }
    i=diffIndex-1;
    elements.push(obj);
    //重置diffIndex和diff
    diff=false;
    diffIndex=collection.length;
  }
  return elements;
}
