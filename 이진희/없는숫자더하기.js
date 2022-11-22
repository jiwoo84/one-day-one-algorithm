function solution(numbers) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = arr.reduce((a, c) => {
    console.log("현재 a값 : ", a);
    console.log("현재 c값 : ", c);
    if (!numbers.includes(c)) {
      console.log(c, "값은 num에 존재하지않음!");
      console.log(a, c, "두 숫자 더하겠음");
      return a + c;
    }
    console.log("현재 A임", a);
    return a;
  }, 0);
  console.log(result);
  return result;
}
