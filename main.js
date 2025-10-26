function maximumSeating(a) {
  let c = 0
  let f = x =>{
    for(let i = 0; i < x.length; i++){
      if(!x[i]&&!x[i+1]&&!x[i+2]&&!x[i-1]&&!x[i-2]){
        x[i]=1
        c++
      }
    }
  }
  f(a),f(a.slice().reverse())
  return c
}