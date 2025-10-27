Array.prototype.toDictionary = function(k, v=x=>x) {
    const r = {}
    for(let i of this)r[k(i)]=v(i)
    return r
  }