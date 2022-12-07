// 처음에 reduce를 이용해 TC를 해결하고 제출했는데 실패가 뜨는것.
// 공백일 가능성도 있엇기 때문에 공백잡는 로직도 포함.
// ?? 실패뜸 이해가 안됌
// 실제로 통과한 코드는 맨앞에 공백이 있는 문자열은 못잡아냄
// 이거 버그임 아무튼 reduce쓰는 내풀이가 맞는건데 문제가 오래되서 버그인것임

/*
    const b = split.reduce((a, word) => {
        if (word === "" || word === undefined) {
        return a;
        }
        word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        a.push(word);
        return a;
    }, []);
*/

function solution(s) {
  var answer = "";
  const split = s.split(" ");
  const b = split.map((word) => {
    if (word === "") return;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  answer = b.join(" ");
  return answer;
}
