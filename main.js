function getCharacters(obj, key, val) {
    var foundCharacters = [];
    for(let i of obj["characters"])if(i[key]&&i[key].toLowerCase()===val.toLowerCase())foundCharacters.push(i)
    return foundCharacters
  }