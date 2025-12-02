function crusoe(n, d, ang, distmult, angmult) {
  let x = 0;
  let y = 0;
  let currentDistance = d;
  let currentAngle = ang * Math.PI / 180;
  
  for (let i = 0; i < n; i++) {
      x += currentDistance * Math.cos(currentAngle);
      y += currentDistance * Math.sin(currentAngle);
      
      currentDistance *= distmult;
      currentAngle *= angmult;
  }
  
  return [x, y];
}