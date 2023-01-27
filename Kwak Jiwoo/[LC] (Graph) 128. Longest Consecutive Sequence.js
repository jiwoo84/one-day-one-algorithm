// 배열 안에 연속된 숫자의 최대 개수를 구하시오 (O(n)의 시간복잡도로 구현)

var longestConsecutive = function(nums) {
    
    if(nums.length === 0) return 0;
    
    let max = 0;
    
    const set = new Set(nums); // num의 요소를 set에 담아줌
    
    for(let n of set) {
        
        // n-1이 있다면, 거기서에 도달해서 순회를 돌 것이기 때문에 할 필요 없으니 패스
        // 이 처리를 안해주면 시간 초과
        if(set.has(n-1)) continue; 
        
        let curMax = 1;
        let curN = n; 
        
        while(set.has(curN+1)) { // 다음 숫자 있나 검색 (근데 여기서 중첩이면 O(n2) 아닌가?)
            curMax ++;
            curN ++;
        }
        
        max = Math.max(curMax, max);
    }
    
    return max;
};

// 102ms, 57.5mb
