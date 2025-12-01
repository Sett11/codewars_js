function cube(n) {
  let result = [];
  
  for (let i = 0; i < n; i++) {
    let spaces = ' '.repeat(n - i - 1);
    let slashes = '/\\'.repeat(i + 1);
    let underscores = '_\\'.repeat(n);
    result.push(spaces + slashes + underscores);
  }
  for (let i = 0; i < n; i++) {
    let spaces = ' '.repeat(i);
    let slashes = '\\/'.repeat(n - i);
    let underscores = '_/'.repeat(n);
    result.push(spaces + slashes + underscores);
  }
  
  return result.join('\n');
}