// matrix를 우측 방향 나선형으로 순회해서 요소를 나열한 배열을 구하시오

var spiralOrder = function(matrix) {
    
    const rows = matrix.length, cols = matrix[0].length;
    let visited = Array.from({length: rows}, v => Array(cols).fill(0)) // 방문 여부 표시
    let [r,c] = [0,0]; // 순회돌 포인터
    let cntTurn = 1; // 회전 개수
    let result = [];
    

    // 순회 시작점이 방문했다면 루프 종료
    while(visited[r][c] === 0) {
        
        // 시작점을 result에 넣고, 방문 표시
        result.push(matrix[r][c]);
        visited[r][c] = 1
        
        // 오른쪽으로 순회
        while(c < cols - cntTurn) {
            c ++;
            if(visited[r][c] === 1) return result;
            result.push(matrix[r][c]);
            visited[r][c] = 1;
        }
        
        // 아래로 순회
        while(r < rows - cntTurn) {
            r ++;
            if(visited[r][c] === 1) return result;
            result.push(matrix[r][c]);
            visited[r][c] = 1;
        }
        
        // 왼쪽으로 순회
        while(c >= cntTurn) {
            c --;
            if(visited[r][c] === 1) return result;
            result.push(matrix[r][c]);
            visited[r][c] = 1;
        }
        
        // 위쪽으로 순회
        while(r > cntTurn) {
            r --;
            if(visited[r][c] === 1) return result;
            result.push(matrix[r][c]);
            visited[r][c] = 1;
        }
        
        // 다음 루프 시작점으로 이동
        c ++;
        cntTurn++; // 회전 개수 추가
    }
    
    // 시작점이 이미 방문했다면 끝
    return result;
};

// 52ms / 42mb
