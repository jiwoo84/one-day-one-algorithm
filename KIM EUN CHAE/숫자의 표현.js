//방법 1
function solution(n) {
  let answer = 0;
  
  for(let i = 1; i<=n; i++) {
      let temp = i;
      for(let j = i+1; j<=n; j++) {
          temp += j;
          if(temp === n) answer ++
          else if(temp > n) break;
      }
  }
  return answer + 1
}


//방법 2
function solution(n) {
let answer = 0;

for(let i = 0; i <= n; i++) { // 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수 약수의 개수
  if(n%i === 0 && i%2 === 1) answer++;
}

return answer;
}
