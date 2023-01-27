// 나의 풀이는 쓔레기다

// 아래는 인터넷에서 찾아본 풀이.
// 최종적으로 아래 obj 를 먼저 만들고, Object.values()라는 메서드를 사용해 답을 리턴한다.
// {
// 차량번호1:{정산할시간: , 차량번호: 출차상태: 마지막입차시간:}
// ,...
// }
// 재밌는 점은 {} 형태라도 안에 값들이 여러개 들어있을경우, {차량번호1,차량번호2,...}
// map 함수를 사용할 수 있고, 리턴시 배열로 나옴
// 문제에 차량번호가 작은순으로 먼저 보여달라고 했으니, sort() 를 사용하였는데, obj 이기 때문에 sort((a,b)=>a.정렬1-b.정렬1)
// map 함수가 참 놀랍군..
function solution(fees, records) {
  const cars = {};

  const a = records.forEach((v) => {
    // 정보 쪼개기
    let [time, car, type] = v.split(" ");

    const [hour, minute] = time.split(":");

    // 분으로 바꾸기
    time = hour * 60 + Number(minute);

    // 처음 조회되는 차량일 시
    if (!cars[car]) {
      cars[car] = { time: 0, car };
    }

    cars[car].type = type;

    if (type == "OUT") {
      cars[car].time += time - cars[car].lastInTime;
      return;
    }

    cars[car].lastInTime = time;
  });
  console.log(cars);

  return Object.values(cars)
    .sort((a, b) => a.car - b.car)
    .map((v) => {
      // 차량이 최종적으로 나가지 않았을 때
      if (v.type == "IN") {
        v.time += 1439 - v.lastInTime;
      }

      // 기본시간을 넘지 않았을 때
      if (fees[0] > v.time) {
        return fees[1];
      }

      return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
    });
}
