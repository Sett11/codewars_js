const Spectrometer = {
  getHeaviest: function(atomicMasses) {
    // Handling empty sample - return 0 for calibration
    if (!atomicMasses || atomicMasses.length === 0) {
      return 0;
    }
    
    let maxMass = atomicMasses[0];
    for (let i = 1; i < atomicMasses.length; i++) {
      if (atomicMasses[i] > maxMass) {
        maxMass = atomicMasses[i];
      }
    }
    return maxMass;
  }  
};

console.log(Spectrometer.getHeaviest([1, 2, 3, 4, 5]));
console.log(Spectrometer.getHeaviest([]));
console.log(Spectrometer.getHeaviest([10, 20, 30, 40, 50]));
console.log(Spectrometer.getHeaviest([100, 200, 300, 400, 500]));
console.log(Spectrometer.getHeaviest([1000, 2000, 3000, 4000, 5000]));
console.log(Spectrometer.getHeaviest([10000, 20000, 30000, 40000, 50000]));
console.log(Spectrometer.getHeaviest([100000, 200000, 300000, 400000, 500000]));
console.log(Spectrometer.getHeaviest([1000000, 2000000, 3000000, 4000000, 5000000]));
console.log(Spectrometer.getHeaviest([10000000, 20000000, 30000000, 40000000, 50000000]));