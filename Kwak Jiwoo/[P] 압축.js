function solution(msg) {
    var answer = [];
    let arr = [''];
    
   for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    arr.push(String.fromCharCode(i));
  }
    
    let i = 0;
    
    while(i < msg.length) {
        let j = i + 1;
        while(arr.includes(msg.slice(i, j)) && j <= msg.length) {
            j ++;
        }
        arr.push(msg.slice(i, j));
        answer.push(arr.indexOf(msg.slice(i, j - 1)));
        i = j - 1;
    }
    
    return answer;
}
