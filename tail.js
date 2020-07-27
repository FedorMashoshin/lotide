const tail = function (result) {
  if (result.length === 0 || result.length === 1) {
    return [];
  } else {
    let finalArr = result.slice(1);
    return finalArr;
  }

};

module.exports = tail;