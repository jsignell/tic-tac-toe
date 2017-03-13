function allValuesInArray(a1, a2) {
  var bool = true;
  a1.forEach(function(item, index, array) {
    bool = bool && a2.indexOf(item) != -1;
    })
  return bool;
};

function anyValueInArray(a1, a2) {
  var bool = false;
  a1.forEach(function(item, index, array) {
    bool = bool || a2.indexOf(item) != -1;
    })
  return bool;
};
