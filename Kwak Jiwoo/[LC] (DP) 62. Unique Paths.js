// 한 번에 오른쪽 or 아래쪽으로 한 칸씩 움직일 수 있을 때, [0][0]에서 [m-1, n-1]로 갈 수 있는 경로의 경우의 수를 구하시오.

var uniquePaths = function(m, n) {
    let paths = Array.from({length: m}, (v) => Array(n).fill(0));
    paths[0][0] = 1;
    
    for(let r = 0; r < m; r ++) {
        for(let c = 0; c < n; c++) {
            if(r-1 >= 0) {
                paths[r][c] += paths[r-1][c];
            }
            if(c-1 >= 0) {
                paths[r][c] += paths[r][c-1];
            }
        }
    }
    
    return paths[m-1][n-1];
};

// 97ms / 42.1mb
