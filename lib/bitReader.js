"use strict";

var bitReader = function (byte) {
  if (byte > 255 || byte < 0 || ~~byte !== byte) {
  	throw new RangeError('invalid byte');
  } else {
    var result = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 8; i++) {
      result[7 - i] = ((byte >> i) & 1);
    }
    return result;
  }
};
