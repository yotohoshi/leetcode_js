/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    var sumToindex = new Map();
    var sum = 0, maxlen = 0;
    
    for(var i = 0; i < nums.length; i++) {
        sum += (nums[i] === 1) ? 1 : -1;
        if(sum === 0)
            maxlen = Math.max(maxlen, i + 1);
        if(sumToindex.has(sum))
            maxlen = Math.max(maxlen, i - sumToindex.get(sum));
        else
            sumToindex.set(sum, i);
    }
    
    return maxlen;
};