function bloodAlcoholContent(drinks, weight, sex, time){
  const A = drinks.ounces * drinks.abv;
  const W = weight;
  const r = sex === "male" ? 0.73 : 0.66;
  const H = time;
  
  let bac = (A * 5.14 / W * r) - 0.015 * H;
  bac = Math.round(bac * 10000) / 10000;
  return bac < 0 ? 0 : bac;
}