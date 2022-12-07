// 사방이 0으로 둘러싸인 1 덩어리 섬의 개수를 구하시오

var numIslands = function(grid) {
    
    let count = 0;
  
    function depthSearch(r,c) {
        
        if(grid[r][c] === '1') { // 초기 1 하나만 count+1이 되고, 이어지는 1 영역은 0이 됨
            grid[r][c] = '0';
        }
        else return;
        
        if(r+1 < grid.length) {
            depthSearch(r+1, c);
        }
        
        if(r > 0) {
            depthSearch(r-1, c);
        }
        
        if(c+1 < grid[0].length) {
            depthSearch(r, c+1);
        }
        
        if(c > 0) {
            depthSearch(r, c-1);
        }
    }
    
    for(let i = 0; i < grid.length; i++) {
        
        for(let j = 0; j < grid[0].length; j++) {
            
            if(grid[i][j] === '1') {
                depthSearch(i,j); 
                count ++; // 1을 발견한 초기에 섬 하나 추가
            }
        }
    }
    
    return count;
};

// 80ms / 44.8mb
