// 2차원 배열의 왼쪽&상단은 pacific / 오른쪽&하단은 atlantic
var pacificAtlantic = function(matrix) {
    
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    // 각 바다 방문가능 여부 체크하는 2차원 배열 생성
    let atlantic = Array.from({length: rows}, (v) => Array(cols).fill(false));
    let pacific = Array.from({length: rows}, (v) => Array(cols).fill(false));
    
    let result = [];
    
    // 1행, 마지막행의 각 요소에서 출발해서 dfs로 사방의 요소를 체크함
    for(let c = 0; c < cols; c ++) {
        dfs(matrix, 0, c, Number.MIN_SAFE_INTEGER, pacific)
        dfs(matrix, rows-1, c, Number.MIN_SAFE_INTEGER, atlantic)
    }
    
    // 1열, 마지막열의 각 요소에서 출발해서 dfs로 사방의 요소를 체크함
    for(let r = 0; r < rows; r ++) {
        dfs(matrix, r, 0, Number.MIN_SAFE_INTEGER, pacific)
        dfs(matrix, r, cols-1, Number.MIN_SAFE_INTEGER, atlantic)
    }
    
    // atlantic, pacific 순회하며 둘다 true면 result에 넣음
    for(let r = 0; r < rows; r ++) {
        for(let c = 0; c < cols; c ++) {
            if(atlantic[r][c] && pacific[r][c]) result.push([r,c]);
        }
    }
    
    return result;
    
    function dfs(matrix, r, c, pre, ocean) {
        
        // 만약 갈 수 없는 요소이면 끝
        if(r < 0 || c < 0 || r > rows-1 || c > cols-1) return;
        
        if(pre > matrix[r][c]) return; // 바다와 닿을 수 있는 요소보다 큰 수를 가지고 있으면 끝
        if (ocean[r][c]) return; // 이미 true인 요소라면, 체크할 필요 없음 (체크하면 무한 루프에 빠짐)
        ocean[r][c] = true; // 통과했으면 물이 흘러올 수 있으므로 true 처리
        
        // 사방으로 재귀
        dfs(matrix, r+1, c, matrix[r][c], ocean)
        dfs(matrix, r-1, c, matrix[r][c], ocean)
        dfs(matrix, r, c+1, matrix[r][c], ocean)
        dfs(matrix, r, c-1, matrix[r][c], ocean)
    }
};

// 167ms / 49.4mb
