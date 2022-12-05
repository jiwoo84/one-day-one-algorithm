function solution(s) {
  let answer = 0;
  // (라면 +1 , )라면 -1 을 해주어 () 한쌍이 나온다면 0이 되게끔 셋팅,
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      answer += 1;
    } else {
      answer -= 1;
    }
    // 예외상황은 ()) 이런 경우임.
    // 0보다 작을 경우가 되기 떄문에 무조건 false 반환
    if (answer < 0) return false;
  }
  return answer === 0 ? true : false;

  // 기존에는 첫글자가 ( 이고, 마지막글자가 ) 일 경우에만 true 로 했다.
  // 문제를 잘못 이해한것이다.
  // (()((((() 이런 s 가 주어져도 true 를 리턴했을것이다.
  // 올바른 괄호는 () 가 짝을 이뤄야한다.
  // 그렇기 때문에 기존 문제풀이방법은 틀렸다.
}
