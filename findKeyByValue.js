const findKeyByValue = function (objGenre, movie) {
  for (key in objGenre) {
    if (movie === objGenre[key]) {
      return key
    }
  }
}

module.exports = findKeyByValue;