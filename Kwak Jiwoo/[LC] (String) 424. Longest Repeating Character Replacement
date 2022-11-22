// s의 알파벳을 k번 바꿔서 만들 수 있는 같은 알파벳의 최대 개수

var characterReplacement = function(s, k) {
    
    if(s.length === 1) return 1;
    
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        
        const al = s.charAt(i);
        let tempK = k;
        let tempMax = 1;
        let lastIdx = i;
        
        if(k > 0) {
            
            for(let j = i+1; j < s.length; j++) {
            
                if(al !== s.charAt(j)) tempK --;

                tempMax ++;

                // 변경 가능 횟수 소진되면 종료
                if(tempK === 0) {
                    lastIdx = j;
                    break;
                }
            }
        }
        
        
        for(let k = lastIdx+1; k < s.length; k++) {
            
            if(al === s.charAt(k)) {
                tempMax ++;
                console.log(al, k, tempMax)
            }
            else break;
        }
        
        max = Math.max(max, tempMax)
    }
    
    return max >= s.length ? s.length : max;
};

// 2611 ms / 50.5mb

// ---------------------------------------------------------------------------------------------------------------
// disscuss 참고 풀이
// 포인터를 이동하면서 k번 바꿔도 반복되는 구간 찾아가는 방법
var characterReplacement = function(s, k) {
    
    // 포인터
    let left = 0, right = 0
    
    // 최대 반복되는 알파벳의 개수
    let maxCharCnt = 0;
    
    // 알파벳 반복 개수 저장한 객체
    let cnt = {};
    
    let result = 0;
    
    while(right < s.length) {

        // 해당 알파벳의 개수 추가
        let char = s.charAt(right);
        cnt[char] = (cnt[char] || 0) + 1;
        
        // 옮긴 후 최대 반복되는 알파벳의 개수 재정의
        if(maxCharCnt < cnt[char]) maxCharCnt = cnt[char];
        
        // 만약 k번 바꿔도 반복이 안되면, left를 한칸 옮김
        if(right - left + 1 - maxCharCnt > k) {
            cnt[s[left]] --;
            left ++;
        }
        
        // 지금 포인터의 크기 or 최대 반복 횟수 중 큰걸로 값 저장
        // maxCharCnt + k로 하지 않는 이유: "AAAA" 같은건 k를 아예 안 쓰기 때문
        result = Math.max(maxCharCnt, right-left+1)
        right ++;

    }
    
    return result;
};
