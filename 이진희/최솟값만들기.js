// 내가 하려고 했던 풀이는
// 2중 포문을 이용해서
// 곱했을때 가장 작은 수를 배열에 담고,
// 그 배열의 합을 리턴하는 방식..
// 하지만 이 방법은 정답도 아니고 좋은 접근도 아니다.
// 최솟값을 구하는 공식같은게 존재하는데,
// [][] 두 개의 리스트가 있다면 각 원소별로 가장 작은수와 큰 수를 곱하거나 더한것이 최솟값이 되는 공식같은 것이다.
// 고로 가장 간단한 풀이는
// A 는 오름차순, B는 내림차순 정렬후
// for 문 한개로 i번째 원소끼리 곱해주면 된다...

// 꼭 기억해서 삽질하지 말자!! 최솟값을 구하고싶다? => 가장 작은수, 큰 수를 더하거나 곱해라!!
function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
// function solution(A, B) {
//   let answer = 0;
//   let arr = [];
//   let waitAnswer = [];
//   let zz = [];
//   // 각 개수에 맞게끔 한것
//   for (let i = 0; i < A.length; i++) {
//     arr.push(A[i] * B[i]);
//   }
//   waitAnswer.push(
//     arr.reduce((a, c) => {
//       a = a + c;
//       return a;
//     }, 0)
//   );

//   for (let i = 0; i < A.length; i++) {
//     const firstMultiply = A[i] * B[i];
//     // 첫번째 인덱스끼리의 곱을 먼저 배열에 넣고 2차원배열 ㄱㄱ
//     console.log("첫번째 인덱스의 곱한 값 : ", firstMultiply);
//     zz.push(firstMultiply);
//     for (let a = 1; a < A.length; a++) {
//       const secondMultiply = A[i] * B[a];
//       console.log("두번째 인덱스의 곱한 값 : ", secondMultiply);
//       // 만약 두번째 포문을 순회하다가 첫번째인덱스끼리 곱한값이 아닌게 더 작다면
//       // 첫번째 값을 배열에서 뺌. 그 값을 배열에 넣음
//       if (firstMultiply > secondMultiply) {
//         zz.pop();
//         zz.push(secondMultiply);
//         console.log("두 번째 인덱스 곱한게 더 작음!", secondMultiply);
//         // 한번 사용한 원소는 사용할 수 없으므로
//         // slice를 이용해 A 는 i번째 원소를, B 는 a 번째 원소를 삭제하고
//         // length 가 줄었으니 i 와 a 의 값을 -- 해준다
//         A.splice(i, 1);
//         B.splice(a, 1);
//         break;
//       }
//       break;
//     }
//   }
//   console.log(zz);
//   zz = zz.reduce((a, c) => {
//     a = a + c;
//     return a;
//   }, 0);
//   // 여기까지 잘 왔다면 zz 배열에는 곱한 가장 작은 경우의 수가 들어있어야함
//   console.log(zz);
//   return answer;
// }

solution([1, 2], [3, 4]);
