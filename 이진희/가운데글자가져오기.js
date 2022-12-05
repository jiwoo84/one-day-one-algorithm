function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer += s.charAt(s.length * 0.5 - 1) + s.charAt(s.length * 0.5);
    return answer;
  }
  answer = s.charAt(Math.floor(s.length * 0.5));
  return answer;
}
