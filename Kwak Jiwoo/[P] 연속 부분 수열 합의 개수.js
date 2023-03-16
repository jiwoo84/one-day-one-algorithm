// 1차 풀이: 느림
function solution(elements) {
    let nums = new Set();
    let lgth = elements.length;
    
    for(let i = 1; i <= lgth; i++) {
        for(let j = 0; j < lgth; j++) {
            let connects = [];
            if(j + i <= lgth) {
                connects = elements.slice(j, j + i);
                nums.add(connects.reduce((sum, v) => sum + v , 0));
            }
            else {
                connects = [...elements.slice(j), ...elements.slice(0, j+i-lgth)];
                nums.add(connects.reduce((sum, v) => sum + v , 0));
            }
        }
    }
    
    return nums.size;
}

// 2차 풀이
function solution(elements) {
    let nums = new Set();
     const circular = elements.concat(elements);
    
    for(let i = 0; i < elements.length; i++) { // 시작 인덱스
        let sum = 0;
        for(let j = 0; j < elements.length; j++) { // 연속되는 숫자 개수
            sum += circular[j + i];
            nums.add(sum);
        }
    }
    
    return nums.size;
}
