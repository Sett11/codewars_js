function realSize(a) {
    return a.reduce((acc, val) => acc + (Array.isArray(val) ? realSize(val) : 1), 0)
  }