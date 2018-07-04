'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var ele of objectB.value) {
    for (var obj of collectionA) {
      if (ele===obj.key) {
        obj.count-=Math.floor(obj.count/3);
        break;
      }
    }
  }
  return collectionA;
}
