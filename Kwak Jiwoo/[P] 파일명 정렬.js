function solution(files) {

    files.sort((a,b) => {
        let aIdx = 0, bIdx = 0;
        
        // HEDA 구하기
        while(aIdx < a.length) {
            let v = a.charAt(aIdx);
            if(!isNaN(v) && v !== ' ') break; 
            // isNaN(' ') = false 공백은 숫자같이 처리되서 예외처리 필요함 (공백 뒤에 문자열 나올 수도 있음)
            aIdx ++;
        }
        while(bIdx < b.length) {
            let v = b.charAt(bIdx);
            if(!isNaN(v) && v !== ' ') break;
            bIdx ++;
        }
        let aHEAD = a.slice(0, aIdx).toLowerCase();
        let bHEAD = b.slice(0, bIdx).toLowerCase();
        
        if(aHEAD < bHEAD) return -1;
        if(aHEAD > bHEAD) return 1;
        
        let aNUM = '', bNUM = '';
        
        while(aIdx < a.length) {
            if(isNaN(a.charAt(aIdx)) || aNUM.length >= 5) break;
            aNUM += a.charAt(aIdx);
            aIdx ++;
        }
        while(bIdx < b.length) {
            if(isNaN(b.charAt(bIdx)) || bNUM.length >= 5) break;
            bNUM += b.charAt(bIdx);
            bIdx ++;
        }
        
        aNUM = parseInt(aNUM);
        bNUM = parseInt(bNUM);
        return aNUM - bNUM;
    })
    
    return files;
}
