// 주어진 arr의 1의 인덱스에만 전봇대를 설치할 수 있고, 전봇대의 k 이내의 거리의 인덱스에만 전기가 들어온다. (k만큼의 거리의 인덱스는 안들어옴)
// 모든 인덱스에 전기를 제공하고 싶을 때, 설치할 수 있는 최소한의 전봇대의 개수를 구하시오. (설치할 수 없다면 -1 반환)

function pylons(k, arr) {
    const lgth = arr.length;
    let cnt = 0; // 설치하는 개수
    let criteria = 0; // 다음 설치할 전봇대의 기준이 되는 인덱스
    let loc = k-1; // 현재 설치 여부를 조사하는 인덱스
    
    while(criteria < lgth) {
        if(arr[loc] === 1) { // 만약 설치 가능하다면
            criteria = loc + k; // 기준을 전기가 미처 닿지 못하는 인덱스로 옮기고
            loc = criteria + (k-1); // 최대로 멀리 설치할 수 있는 곳으로 인덱스 옮겨서 조사(기준에 k-1을 더하는 위치로 여기에 설치 가능하다면 criteria까지 전기 옴) 
            cnt ++;
            if(loc >= lgth) loc = lgth-1; // 만약 arr 길이 넘으면 안 넘게 처리
        }
        else {
            loc --; // 안되면 이전 인덱스 조사
            if(loc <= criteria - k || loc < 0) return -1; // 현재 위치가 0보다 작거나, 전에 설치했던 위치까지 오면 방법이 없는것임
        }
    }
    
    return cnt;
}
