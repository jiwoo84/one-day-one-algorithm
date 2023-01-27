function solution(s) {
  var answer = "";
  let 작은수 = s.split(" ").sort((a, b) => a - b);
  let 큰수 = s.split(" ").sort((a, b) => b - a);
  console.log(작은수, 큰수);
  while (작은수.length > 1 && 큰수.length > 1) {
    작은수.pop();
    큰수.pop();
  }
  console.log(작은수, 큰수);
  answer = 작은수;
  answer += ` ${큰수}`;
  return answer;
}
solution("-1 -3 1 5 -5");
