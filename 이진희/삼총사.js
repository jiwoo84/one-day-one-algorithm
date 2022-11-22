function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let r = i + 1; r < number.length - 1; r++) {
      for (let z = r + 1; z < number.length; z++) {
        if (number[i] + number[r] + number[z] === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}

// 아예 푸는 방법을 몰라서 인터넷에 찾아봄..
// 주이지는 배열 number가 3<= number <= 13 이라고 하여 , 3중포문을 사용하면 된다고 한다!
// for 문 자체는 잘 사용하기 때문에 푸는 방법을 알고나니, 쉽게 풀렸다.
// 삼총사 이므로, 3개의 정수의 합이 0인 경우 answer 로 넘겨주면 된다.
// i,j,z,4,5,6,... 이라는 배열에서 z 값을 4,5,6,... 바꿔주며 삼총사를 찾고, i,1,j,z,5,6,... j가 바뀌어 또다시 찾고..

// 아래는 리액트 state 연습한거
// const SOS = ({ onSOS }) => {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//     const timer = setTimeout(() => {
//       if (count > 2) {
//         onSOS();
//       } else {
//         clearTimeout(timer);
//       }
//     }, 1000);
//   };
//   return <button onClick={handleClick}>1초안에 세번 누르면 긴급호출</button>;
// };
