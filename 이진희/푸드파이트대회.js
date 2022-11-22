function solution(food) {
  var answer = "";
  for (let i = 0; i < food.length; i++) {
    if (food[i] >= 2) {
      const divide = food[i] / 2;
      const put = String(i).repeat(divide);
      answer += put;
    }
  }
  const reverse = answer.split("").reverse().join("");
  answer += "0";
  answer += reverse;

  return answer;
}
