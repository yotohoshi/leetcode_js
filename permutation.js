/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    var curr = [];
    backtracking(nums, curr, result);
    return result;
};

function backtracking(nums, curr, result) {
    if(curr.length == nums.length) {
        result.push(curr.slice());
        return;
    }
    for(num of nums) {
        if(curr.includes(num))
            continue;
        curr.push(num);
        backtracking(nums, curr, result);
        curr.pop();
    }
}