// 1차 풀이
function solution(fees, records) {
    let accumulatedTime = {};
    let [baseTime, baseRate, unitTime, unitRate] = fees;
    
    function changeMin(str) {
        let [h,r] = str.split(':');
        return h * 60 + r * 1;
    }
    
    for(let i = 0; i < records.length; i++) {
        let [time, carNum, type] = records[i].split(' ');
        time = changeMin(time);
        let outFlag = true;
        
        if(type === 'IN') {
            for(let j = i+1; j < records.length; j++) {
                let [outTime, outCarNum, outType] = records[j].split(' ');
                if(outCarNum === carNum && outType === 'OUT') {
                    let stayTime = changeMin(outTime) - time;
                    accumulatedTime[carNum] = (accumulatedTime[carNum] || 0) + stayTime;
                    break;
                }
                if(j === records.length-1) outFlag = false;
            }
            if(i === records.length - 1) outFlag = false;
            if(!outFlag) accumulatedTime[carNum] = (accumulatedTime[carNum] || 0) + 1439 - time;
        }
    }

    for(let carNum in accumulatedTime) {
        let stayTime = accumulatedTime[carNum];
        let rate = baseRate;
        
        if(stayTime > baseTime) {
            rate += Math.ceil((stayTime - baseTime)/unitTime) * unitRate;
        }
        accumulatedTime[carNum] = rate;
    }
    
    
    return Object.entries(accumulatedTime).sort((a,b) => a[0] - b[0]).map(v => v[1]);
}

// 2차 풀이
function solution(fees, records) {
    let accumulatedTime = {};
    let [baseTime, baseRate, unitTime, unitRate] = fees;
    
    records.forEach(record => {
        let [time, carNum, type] = record.split(' ');
        let [h, r] = time.split(':');
        time = h * 60 + r * 1;
        
        if(!accumulatedTime[carNum]) accumulatedTime[carNum] = 0;
        if(type === "IN") accumulatedTime[carNum] += (1439 - time);
        else accumulatedTime[carNum]  -= (1439 - time);
    })

    for(let carNum in accumulatedTime) {
        let stayTime = accumulatedTime[carNum];
        let rate = baseRate;
        
        if(stayTime > baseTime) rate += Math.ceil((stayTime - baseTime)/unitTime) * unitRate;
        
        accumulatedTime[carNum] = rate;
    }
    
    return Object.entries(accumulatedTime).sort((a,b) => a[0] - b[0]).map(v => v[1]);
}
