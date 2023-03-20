function solution(n, m, section) {
    if(m === 1) return section.length;
    let cnt = 0;
    while(section.length) {
        let paintStart = section.shift();
        section = section.filter(v => v >= paintStart + m);
        cnt ++;
    }
    return cnt;
}
