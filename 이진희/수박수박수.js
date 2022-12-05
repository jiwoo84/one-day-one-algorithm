function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      answer += "수";
    } else if (i === 1) {
      answer += "박";
    } else if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}
