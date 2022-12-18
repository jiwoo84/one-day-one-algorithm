// 풀이 1

function solution(str1, str2) {
  str1 = str1.toUpperCase(); 
  str2 = str2.toUpperCase(); 
  
  const arr1 = toPairArr(str1);
  const arr2 = toPairArr(str2);
  
  const intersection = [];
  const union = []; 
  
  function toPairArr(str) {
      const arr = new Array(); 
      for(let i=0; i<str.length-1; i++) {
          const text = str.substr(i,2);
          if(text[0] >= "A" && text[0] <= "Z" && text[1] >="A" && text[1] <= "Z") {
              arr.push(text); 
          }
      }
      return arr; 
  } 
  
  for(let i=0; i< arr2.length; i++) {
      if(arr1.indexOf(arr2[i]) >= 0){
          intersection.push(arr1.splice(arr1.indexOf(arr2[i]),1));
      }
      union.push(arr2[i]); 
   }
  
  for(let i=0; i<arr1.length; i++) {
      union.push(arr1[i]); 
  }
  
  if(intersection.length === 0 & union.length === 0){
      return 65536; 
  }
  
  return parseInt(65536 * (intersection.length / union.length));

}

// 풀이 2 
function solution (str1, str2) {
  
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) { //정규식 사용 
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]); // Set 활용  
  let union = 0;
  let intersection = 0;

  //같은 원소를 검사해서 많은  쪽은 union에 더하고 적은쪽은 intersection에 더한다.
  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
