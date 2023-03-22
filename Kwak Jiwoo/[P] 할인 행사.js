// 1차 풀이
function solution(want, number, discount) {
    let result = 0;
    let canBuy = {};
    let wantCnt = {};
    
    want.forEach((v,i) => wantCnt[v] = number[i]);

    for(let i = 0; i < 10; i++) {
        canBuy[discount[i]] = (canBuy[discount[i]] || 0) + 1;
    }

    for(let i = 0; i < discount.length - 9; i++) {
        let boolean = true;
        for(let j = 0; j < want.length; j++) {
            if(!canBuy[want[j]]) {
                boolean = false;
                break;
            }
        }
        
        if(boolean) {
            for(let pro in wantCnt) {
                if(canBuy[pro] < wantCnt[pro]) {
                    boolean = false;
                    break;
                }
            }
        }
        
        if(boolean) result ++;
        
        canBuy[discount[i]] --;
        canBuy[discount[i+10]] = (canBuy[discount[i+10]] || 0) + 1;
    }
    
    return result;
}

// 참고 풀이
function solution(want, number, discount) {
    let count = 0;
    
    for(let i = 0; i < discount.length - 9; i++) {
        let canBuy = discount.slice(i, i + 10);
        let flag = true;
        
        for(let j = 0; j < want.length; j++) {
            if(canBuy.filter(v => v === want[j]).length !== number[j]) {
                flag = false;
                break;
            }
        }
        if(flag) count += 1;
    }
    return count;
}
