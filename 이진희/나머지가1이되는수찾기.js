function solution(n) {
  let x = 0;
  let arr = [];
  while (x < n) {
    if (n % x === 1) {
      arr.push(x);
    }
    x++;
  }
  const min = Math.min.apply(null, arr);
  return min;
}
