
var canJump = function(nums) {
    
    let canVisit = Array(nums.length).fill(0);
    canVisit[0] = 1;
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if(canVisit[i]) {
            for(let j = 1; j <= num; j++) {
                canVisit[i+j] = 1;
            }    
        }
        
    }
    
    return canVisit[nums.length-1] === 1 ? true : false;
};

// 3094ms / 53.4mb

// 참고 풀이
// https://www.youtube.com/watch?v=Yan0cv2cLy8

const canJump = (nums) => {
    let goal = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i --) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};
