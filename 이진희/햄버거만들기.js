function solution(ingredient) {
  let answer = 0;
  // 재료 별 반복
  for (let i = 0; i < ingredient.length; i++) {
    // 배열의 4 요소가 빵 야채 고기 빵 인 경우
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      answer++;
      // 햄버거 재료 배열에서 제외
      ingredient.splice(i, 4);
      // for 문 마지막에 i++ 을 하기때문에 i-=4 가 아닌, -3 해준다.
      i -= 3;
    }
  }
  return answer;
}
