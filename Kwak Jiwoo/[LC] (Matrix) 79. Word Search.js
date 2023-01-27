// 주어진 string을 matrix안에서 찾으시오 (수평, 수직으로 연속해서 있어야 하며 중복 안됨)

var exist = function(board, word) {

    const rows = board.length;
    const cols = board[0].length;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]]; // 요소의 사방을 순회할 때 사용

    const dfs = (r, c, k) => {
        if(board[r][c] !== word.charAt(k)) return false; // 해당 요소가 단어와 일치하지 않으며 false
        if(k === word.length - 1) return true; // 맨 끝까지 왔다면 true

        board[r][c] = '*'; // 방문 표시

        for(const [dr, dc] of dirs) { // 사방을 순회
            const R = r + dr;
            const C = c + dc;
            if(R >= 0 && R < rows && C >= 0 && C < cols) { // 옮긴 위치가 배열 안에 있다면
                if(dfs(R, C, k+1)) return true; // dfs 재귀해서 모두 true => true
            }
        }

        board[r][c] = word.charAt(k); // 여기까지 왔다면 없는거니까 다시 순회하기 위해 방문표시 취소
        return false;
    }

    for(let r = 0; r < rows; r++) { // board의 요소를 순회
        for(let c = 0; c < cols; c++) {
            if(dfs(r,c,0)) return true;
        }
    }

    return false;
};
