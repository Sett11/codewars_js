function crossProduct(v1, v2) {
  
  const x = v1.y * v2.z - v1.z * v2.y;
  const y = v1.z * v2.x - v1.x * v2.z;
  const z = v1.x * v2.y - v1.y * v2.x;
  
  return new Vector(x, y, z);
}