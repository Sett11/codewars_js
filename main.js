function qf(donations, pool) {
  let received = [];
  let weights = [];
  let totalWeight = 0;
  
  for (let i = 0; i < donations.length; i++) {
    let projectDonations = donations[i];
    let sumOfRoots = 0;
    
    for (let j = 0; j < projectDonations.length; j++) {
      sumOfRoots += Math.sqrt(projectDonations[j]);
    }
    
    let weight = Math.pow(sumOfRoots, 2);
    weights.push(weight);
    totalWeight += weight;
  }
  
  for (let i = 0; i < weights.length; i++) {
    let funding = pool * (weights[i] / totalWeight);
    received.push(Math.round(funding));
  }
  
  return received;
}