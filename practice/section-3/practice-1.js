'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var ele of objectB.value) {
    for (var obj of collectionA) {
      if (ele===obj.key) {
        obj.count--;
        break;
      }
    }
  }
  return collectionA;
}
