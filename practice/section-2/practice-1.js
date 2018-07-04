'use strict';

function countSameElements(collection) {
  //var arr=['w','w3','w','h','h'];
  //alert(arr.sort());
  /*
  var elements=new Array();
  collection=collection.sort();
  for (var i = 0; i < collection.length; i++) {
    var obj={key:"",count:1};
    obj.key=collection[i];
    while (obj.key==collection[i+1]) {
      obj.count++;
      i++;
    }
    elements.push(obj);
  }
  return elements;
  */
  //存放结果的集合
  var elements=new Array();
  //记录第一个与当前字符不同的字符的位置，作为下一个比较的字符
  var diffIndex=collection.length;
  //是否已存在与当前字符不同的字符，默认为false,即默认所有字符都一样
  var diff=false;
  //按顺序取一个字符与其后续额的所有字符进行比较
  for (var i = 0; i < collection.length; i++) {
    //创建对象存储一个字符的出现次数
    var obj={key:"",count:1};
    obj.key=collection[i];
    for (var j = i+1; j < collection.length; j++) {
      if (obj.key!=collection[j]) {
        //当第一次出现于当前字符不同的字符时，修改diff，并记录不同字符的位置
        if (!diff) {
          diff=true;
          diffIndex=j;
        }
      }else {
        obj.count++;
      }
    }
    i=diffIndex-1;
    elements.push(obj);
    //重置diffIndex和diff
    diffIndex=collection.length;
    diff=true;
  }
  return elements;
}
