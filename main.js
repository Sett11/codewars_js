function validName(a){
  const l = a.length
  if(!l)return "You must test at least one name."
  if(l===1)return "Congratulations, you can choose any name you like!"
  for(let i=1; i<l; i++)if(a[i][0].toLowerCase()!==a[i-1][a[i-1].length-1].toLowerCase())return "Back to the drawing board, your baby names are not compatible."
  return "Congratulations, your baby names are compatible!"
}