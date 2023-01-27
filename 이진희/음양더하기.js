function solution(absolutes, signs) {
  let arr = absolutes;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      arr[i] = absolutes[i] * -1;
    } else {
      arr[i] = absolutes[i] * 1;
    }
  }
  arr = arr.reduce((a, c) => {
    a = a + c;
    return a;
  }, 0);
  console.log(arr);
  return arr;
}

solution([4, 7, 12], [true, false, true]);
