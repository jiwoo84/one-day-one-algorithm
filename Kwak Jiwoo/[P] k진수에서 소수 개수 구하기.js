function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let nums = n.toString(k).split('0');
    let cnt = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(isPrime(nums[i])) cnt ++;
    }
    
    return cnt;
}
