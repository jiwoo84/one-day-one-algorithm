// 문제 이해
// 0과 1로만 이루어진 문자열 s 가 있다.
// 이 문자열에서 0을 모두 지운다.
// 나머지 1로 2진법을 만든다.
// 만들어진 숫자에서 다시 0을 뺀 후, 다시 2진법으로 만든다.
// 이것을 반복하여 결국 1로만 이루어진 s 를 만들어라.

// 0을 빼는 로직을 실행할때마다 zeroCnt ++ 을 해주고
// 이진법을 만들때마다 cnt ++ 을 해주어라
// 최종적으로 [cnt,zeroCnt] 을 리턴하라

function solution(s) {
  var answer = [];
  let zeroCnt = 0;
  let cnt = 0;
  // s 의 초기값은 입력값
  while (true) {
    // 두번째 반복부턴 s값은 변환된 2진수임

    let { str, num, zeroSum } = delZero(s);
    // 걸러낸 0이 없다면 return 해야함
    if (zeroSum === 0 && str.length === 1) {
      console.log(str, ` 안에 0이 존재하지 않아서 리턴시킬게. 현재까지 ${str}, [${cnt},${zeroCnt}]`);
      break;
    }
    // 걸러낸 str 을 s에 넣음
    s = str;
    // cnt에 1을 더할거임 2진수로 바꿀 수 있기 때문에
    cnt++;
    // zeroCnt 에 함수에서 0을 뺀 횟수만큼 더함
    zeroCnt += zeroSum;
    // 함수에서 리턴받은 s 를 2진수로 바꿈 스트링으로 변환됨
    console.log(`${s}를 2진수로 바꿀것임, 2진수 => ${s.length.toString(2)}`);
    s = s.length.toString(2);
  }
  answer.push(cnt, zeroCnt);
  console.log(answer);
  return answer;
}
// 먼저 0을 전부 제거하고 그 수를 이진화 시키는 함수 또는 로직을 생성
// 위 리턴값에 0이 들어있다면 계속 반복
// 계속 반복하다가 이진화 시켰는데 0이 없는경우 리턴
function delZero(str) {
  // 이진법이 올랐는지
  let num = 0;
  // 0을 몇개 삭제했는지
  let zeroSum = 0;
  if (str.includes("0")) {
    // zero
    console.log(str, "에 0이 포함되어 있음!");
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") zeroSum++;
    }
    str = str.replace(/0/g, "");
    num++;
    return { str, num, zeroSum };
  }
  console.log(str, "에 0이 포함되지 않음!");
  console.log("리턴값 ", str, num, zeroSum);
  return { str, num, zeroSum };
  // 만약 들어온 str에 0이 없다면 false 리턴
}

// solution("110010101001");
// solution("01110");
