function solution(n, t, m, p) {
    let fullStr = '';
    let result = '';
    let num = 0;

    while(fullStr.length <= m * (t-1) + p) {
        fullStr += (num).toString(n);
        num ++;
    }
    
    fullStr = fullStr.toUpperCase();
    
    for(let i = p-1; result.length < t; i += m) {
        result += fullStr.charAt(i);
    }
    
    return result;
}
