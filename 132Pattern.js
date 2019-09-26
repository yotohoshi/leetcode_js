/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    var aj = [];
    var ak = -Infinity;
    
    for(var i = nums.length - 1; i >= 0; i--) {
        if(Number(nums[i]) < Number(ak)) {
            return true;
        }
        else {
            while(aj.length !== 0 && nums[i] > aj.slice(-1)) {
                ak = aj.slice(-1);
                aj.pop();
            }
        }
        aj.push(nums[i]);
    }
    
    return false;
};